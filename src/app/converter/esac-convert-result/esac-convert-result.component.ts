import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as FileSaver from 'file-saver';

import { MainService } from './../../main/services/main.service';
import { MidiPlayerService } from './../../main/services/midi-player.service';
import { MessageDialogService } from '../../shared/services/message-dialog.service';

@Component({
  selector: 'esac-convert-result',
  templateUrl: './esac-convert-result.component.html',
  styleUrls: ['./esac-convert-result.component.scss']
})
export class EsacConvertResultComponent implements OnInit {

  @Input() esac;

  private createNewEsacFromFromURL: string = '/api/esac';
  public speedData = this.midiPlayerService.getSpeedData();

  constructor(
    private http: HttpClient,
    private mainService: MainService,
    private midiPlayerService: MidiPlayerService,
    private messageDialogService: MessageDialogService
  ) { }

  ngOnInit() {
    this.esac.isPlaying = false;
  }

  ngOnDestroy() {
    this.stopMidi();
  }

  public playMidi(esac): void {
    this.mainService.esacToMidi(esac)
      .subscribe(data => {
        this.esac.isPlaying = true;
        this.midiPlayerService.setMidiSong(data, this.esac.id);
        this.midiPlayerService.playMidi();
      },
      error => {
        this.messageDialogService.displayMessageDialog('Invalid EsAC');
      });
  }

  public stopMidi(): void {
    this.esac.isPlaying = false;
    this.midiPlayerService.stopMidi();
  }

  public isMidiPlaying(): boolean {
    return this.checkEsacId() && this.esac.isPlaying && this.midiPlayerService.isMidiPlaying();
  }

  private checkEsacId(): boolean {
    return this.esac.id === this.midiPlayerService.getEsacId();
  }

  public downloadMidi(esac): void {
    this.mainService.esacToMidiFile(esac)
      .subscribe(data => {
        const blob = new Blob([data], { type: 'audio/midi' });
        FileSaver.saveAs(blob, esac.name + '_' + esac.title + '.mid');
      },
      error => {
        this.messageDialogService.displayMessageDialog('Error downloading EsAC');
      });
  }

  public addEsac(): any {
    return this.http.put(this.createNewEsacFromFromURL, this.esac)
      .subscribe(data => {
        this.messageDialogService.displayMessageDialog('EsAC added successfully');
      }, error => {
        this.messageDialogService.displayMessageDialog('Error adding EsAC');
      });
  }

  public slowDownMidi(): void {
    this.midiPlayerService.slowDownMidi();
    this.speedData = this.midiPlayerService.getSpeedData();
  }

  public speedUpMidi(): void {
    this.midiPlayerService.speedUpMidi();
    this.speedData = this.midiPlayerService.getSpeedData();
  }
}

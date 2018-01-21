import { Component, OnInit, Input } from '@angular/core';

import * as FileSaver from 'file-saver';

import { MainService } from './../../main/services/main.service';
import { MidiPlayerService } from './../../main/services/midi-player.service';
import { HttpClient } from '@angular/common/http';

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
    private midiPlayerService: MidiPlayerService
  ) { }

  ngOnInit() {
    this.esac.isPlaying = false;
  }

  public playMidi(esac): void {
    this.mainService.esacToMidi(esac)
      .subscribe(data => {
        this.esac.isPlaying = true;
        this.midiPlayerService.setMidiSong(data, this.esac.id);
        this.midiPlayerService.playMidi();
      },
      error => {
        console.log('Error downloading file: ', error);
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

  public downloadMidi(esac, index: number): void {
    this.mainService.esacToMidiFile(esac)
      .subscribe(data => {
        const blob = new Blob([data], { type: 'audio/midi' });
        FileSaver.saveAs(blob, esac.name + '_' + esac.title + '.mid');
      },
      error => {
        console.log('Error downloading file: ', error);
      });
  }

  public addEsac(): any {
    return this.http.put(this.createNewEsacFromFromURL, this.esac).subscribe();
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

import { Component, OnInit, Input } from '@angular/core';

import * as FileSaver from 'file-saver';

import { MainService } from '../../services/main.service';
import { MidiPlayerService } from '../../services/midi-player.service';
import { MessageDialogService } from '../../../shared/services/message-dialog.service';

@Component({
  selector: 'app-esac-card',
  templateUrl: './esac-card.component.html',
  styleUrls: ['./esac-card.component.scss']
})
export class EsacCardComponent implements OnInit {

  constructor(
    private mainService: MainService,
    private midiPlayerService: MidiPlayerService,
    private messageDialogService: MessageDialogService
  ) { }

  @Input() esac: any;

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
}

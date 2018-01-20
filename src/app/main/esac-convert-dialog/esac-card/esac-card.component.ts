import { Component, OnInit, Input } from '@angular/core';

import * as FileSaver from 'file-saver';

import { MainService } from '../../services/main.service';
import { MidiPlayerService } from '../../services/midi-player.service';

@Component({
  selector: 'esac-card',
  templateUrl: './esac-card.component.html',
  styleUrls: ['./esac-card.component.scss']
})
export class EsacCardComponent implements OnInit {

  constructor(
    private mainService: MainService,
    private midiPlayerService: MidiPlayerService
  ) { }

  @Input() esac: any;

  ngOnInit() {
    this.esac.isPlaying = false;
  }

  public playMidi(esac): void {
    this.mainService.esacToMidi(esac)
      .subscribe(data => {
        this.esac.isPlaying = true;
        this.midiPlayerService.setMidiSong(data);
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
    return this.esac.isPlaying && this.midiPlayerService.isMidiPlaying();
  }

  public downloadMidi(esac, index: number): void {
    this.mainService.esacToMidi(esac)
      .subscribe(data => {
        const blob = new Blob([data], { type: 'audio/midi' });
        FileSaver.saveAs(blob, esac.name + '_' + esac.title + '.mid');
      },
      error => {
        console.log('Error downloading file: ', error);
      });
  }
}

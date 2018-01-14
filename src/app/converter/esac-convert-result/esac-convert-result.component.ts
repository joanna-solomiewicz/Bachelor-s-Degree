import { Component, OnInit, Input } from '@angular/core';

import * as FileSaver from 'file-saver';

@Component({
  selector: 'esac-convert-result',
  templateUrl: './esac-convert-result.component.html',
  styleUrls: ['./esac-convert-result.component.scss']
})
export class EsacConvertResultComponent implements OnInit {

  @Input() midis;
  player = MIDI.Player;
  private midiLoaded = false;

  constructor() { }

  ngOnInit() {
    MIDI.loadPlugin({
      soundfontUrl: '../../../assets/soundfont/',
      onsuccess: () => {
        this.midiLoaded = true;
      }
    });
  }

  private downloadMidi(index: number): void {
    const midi = this.midis[index];
    let content = midi.midi;
    let blob = new Blob([content], { type: 'audio/midi' });
    FileSaver.saveAs(blob, midi.esac.name + '_' + midi.esac.title + '.mid');
  }

  private playMidi(index:number) : void {
    if (this.midiLoaded) {
      this.player.loadFile('../../../assets/batman.mid', this.player.start);
    }
  }
}

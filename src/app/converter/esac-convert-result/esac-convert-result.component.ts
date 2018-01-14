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
  private midiPlaying;

  constructor() { }

  ngOnInit() {
    MIDI.loadPlugin({
      soundfontUrl: '../../../assets/soundfont/',
      onsuccess: () => {
        this.midiLoaded = true;
      }
    });
    this.initMidiPlaying();
  }

  private initMidiPlaying(): void {
    this.midiPlaying = Array<boolean>(this.midis.length).fill(false);
  }

  private isMidiPlaying(index: number): boolean {
    return this.midiPlaying[index];
  }

  private downloadMidi(index: number): void {
    const midi = this.midis[index];
    let content = midi.midi;
    let blob = new Blob([content], { type: 'audio/midi' });
    FileSaver.saveAs(blob, midi.esac.name + '_' + midi.esac.title + '.mid');
  }

  private playMidi(index:number) : void {
    if (this.midiLoaded) {
      const midi = this.midis[index];
      this.player.loadFile(midi.midi64url, this.player.start);
      this.setMidiPlaying(index);
    }
  }

  private stopMidi(index:number) : void {
    this.player.stop();
    this.setMidiStop(index);
  }

  private setMidiPlaying(index: number): void {
    this.midiPlaying[index] = true;
  }

  private setMidiStop(index: number): void {
    this.midiPlaying[index] = false;
  }
}

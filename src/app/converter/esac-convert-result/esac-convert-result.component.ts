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
  private midiSpeedValue: number = 1;
  private midiSpeedMax: number = 0.5;
  private midiSpeedMin: number = 1.5;
  private midiSpeedStep: number = 0.1;

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

  private playMidi(index: number): void {
    if (this.midiLoaded) {
      const midi = this.midis[index];
      this.player.loadFile(midi.midi64url, this.player.start);
      this.setMidiPlaying(index);
    }
  }

  private stopMidi(index: number): void {
    this.player.stop();
    this.setMidiStop(index);
  }

  private setMidiPlaying(index: number): void {
    this.midiPlaying[index] = true;
  }

  private setMidiStop(index: number): void {
    this.midiPlaying[index] = false;
  }

  private speedUpMidi(index: number): void {
    if (this.midiSpeedValue > this.midiSpeedMax) {
      this.stopMidi(index);
      this.player.timeWarp -= 0.1;
      this.midiSpeedValue -= 0.1;
      this.playMidi(index);
    }
  }

  private slowDownMidi(index: number): void {
    if (this.midiSpeedValue < this.midiSpeedMin) {
      this.stopMidi(index);
      this.player.timeWarp += 0.1;
      this.midiSpeedValue += 0.1;
      this.playMidi(index);
    }
  }
}

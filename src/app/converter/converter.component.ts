import { Component, OnInit } from '@angular/core';

import * as MIDI from '../../assets/js/MIDI.min.js';

@Component({
  selector: 'converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  private step: number = 0;
  private lastStep: number = 3;
  private converterType: number;
  private sourceType: number;
  private progress: number = 0;
  private result: ArrayBuffer;

  constructor() { }

  ngOnInit() {
    // midi.loadPlugin({
    //   soundfontUrl: "./soundfont/",
    //   instrument: "acoustic_grand_piano",
    //   onprogress: function (state, progress) {
    //     console.log(state, progress);
    //   },
    //   onsuccess: function () {
    //     var delay = 0; // play one note every quarter second
    //     var note = 50; // the MIDI note
    //     var velocity = 127; // how hard the note hits
    //     // play the note
    //     midi.setVolume(0, 127);
    //     midi.noteOn(0, note, velocity, delay);
    //     midi.noteOff(0, note, delay + 0.75);
    //   }
    // });

  }

  private chooseConverter(converter: number): void {
    this.converterType = converter;
    this.step++;
    this.updateProgress();
  }

  private chooseSource(source: number): void {
    this.sourceType = source;
    this.step++;
    this.updateProgress();
  }

  private prevStep(): void {
    if (this.step > 0) this.step--;
    this.updateProgress();
  }

  private updateProgress(): void {
    this.progress = this.step * 100 / this.lastStep;
  }

  private handleEsacToMidiFile(event): void {
    this.step++;
    this.result = event;
  }

  private handleEsacToMidiNew(event): void {
    this.step++;
    this.result = event;
  }
}

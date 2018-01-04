import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  public step: number = 0;
  private lastStep: number = 3;
  private converterType: number;
  private sourceType: number;
  public progress: number = 0;
  private result: ArrayBuffer;

  constructor() { }

  ngOnInit() {
    MIDI.loadPlugin({
      soundfontUrl: "assets/soundfont/",
      instrument: "acoustic_grand_piano",
      onprogress: function (state, progress) {
        console.log(state, progress);
      },
      onsuccess: function () {
        var delay = 0; // play one note every quarter second
        var note = 50; // the MIDI note
        var velocity = 127; // how hard the note hits
        // play the note
        MIDI.setVolume(0, 127);
        MIDI.noteOn(0, note, velocity, delay);
        MIDI.noteOff(0, note, delay + 0.75);

        // MIDI.Player.currentTime = 0; // time we are at now within the song.
        // MIDI.Player.endTime = 111; // time when song ends.
        // MIDI.Player.playing = true; // are we playing? yes or no.
        // MIDI.Player.loadFile('filepath', MIDI.Player.start()); // load .MIDI from base64 or binary XML request.
        // MIDI.Player.resume(); // resume the MIDI track from pause.
        // MIDI.Player.pause(); // pause the MIDI track.
        // MIDI.Player.stop(); // stops all audio being played, and resets currentTime to 0.
      }
    });
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

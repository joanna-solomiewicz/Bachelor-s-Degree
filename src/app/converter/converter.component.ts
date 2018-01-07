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
  player = MIDI.Player;
  private midiLoaded = false;

  constructor() { }

  ngOnInit() {
    MIDI.loadPlugin({
      soundfontUrl: 'assets/soundfont/',
      onsuccess: () => {
        this.midiLoaded = true;
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
    if (this.midiLoaded) this.player.loadFile('../../assets/batman.mid', this.player.start);
  }
}

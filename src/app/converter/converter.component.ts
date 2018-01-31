import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  public step = 0;
  private lastStepESAC = 3;
  private lastStepMIDI = 2;
  private converterType: number;
  private sourceType: number;
  public progress = 0;
  private result;

  constructor() { }

  ngOnInit() {
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
    if (this.converterType === 0) {
      this.progress = this.step * 100 / this.lastStepESAC;
    } else {
      this.progress = this.step * 100 / this.lastStepMIDI;
    }
  }

  private handleEsacToMidiFile(event): void {
    this.step++;
    this.updateProgress();
    this.result = event;
  }

  private handleEsacToMidiNew(event): void {
    this.step++;
    this.updateProgress();
    this.result = event;
  }

  private handleMidiToEsac(event): void {
    this.step++;
    this.updateProgress();
    this.result = event;
  }

  convertAgain(): void {
    this.step = 0;
    this.converterType = null;
    this.sourceType = null;
    this.progress = 0;
    this.result = null;
  }

  isProgressCompleted(): boolean {
    return this.progress === 100;
  }
}

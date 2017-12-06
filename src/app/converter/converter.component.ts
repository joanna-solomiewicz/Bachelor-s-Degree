import { Component, OnInit } from '@angular/core';

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

  private nextStep(): void {
    if (this.step < this.lastStep) this.step++;
    this.updateProgress();
  }

  private updateProgress(): void {
    this.progress = this.step*100/this.lastStep;
  }

  private handleEsacToMidiFile(event): void {
    console.log(event)
  }
}

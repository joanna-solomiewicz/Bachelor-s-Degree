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

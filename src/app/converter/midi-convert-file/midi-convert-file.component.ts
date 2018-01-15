import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { ConverterService } from '../services/converter.service';

@Component({
  selector: 'midi-convert-file',
  templateUrl: './midi-convert-file.component.html',
  styleUrls: ['./midi-convert-file.component.scss']
})
export class MidiConvertFileComponent implements OnInit {

  @ViewChild('file') file;
  private files = [];
  private key = '';
  private converting: boolean = false;
  @Output() converted = new EventEmitter();

  constructor(
    private converterService: ConverterService
  ) { }

  ngOnInit() {
  }

  private onChooseFiles(): void {
    if (this.file) {
      this.files.push(this.file.nativeElement.files[0]);
    }
  }

  private onDeleteFiles(index?: number): void {
    if (index) this.files.splice(index, 1);
    else this.files = [];
  }

  private isFilesChosen(): boolean {
    return this.files.length ? true : false;
  }

  private isSubmittable(): boolean {
    return this.files.length && this.key.length ? true : false;
  }

  private submit(): void {
    this.converting = true;
    this.converterService.midiToEsac({ midi: this.files[0], key: this.key })
      .subscribe(data => {
        this.converted.emit(data);
      },
      error => {
        console.log('Error downloading file: ', error)
        this.converted.emit(error);
      },
      () => this.converting = false);
  }
}

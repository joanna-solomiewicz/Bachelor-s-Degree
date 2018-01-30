import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { ConverterService } from '../services/converter.service';
import { MessageDialogService } from '../../shared/services/message-dialog.service';

@Component({
  selector: 'midi-convert-file',
  templateUrl: './midi-convert-file.component.html',
  styleUrls: ['./midi-convert-file.component.scss']
})
export class MidiConvertFileComponent implements OnInit {

  @ViewChild('file') file;
  private files = [];
  public converting: boolean = false;
  @Output() converted = new EventEmitter();
  private key: string = '';
  private keys: string[] = ['Cb', 'C', 'C#',
                            'Db', 'D', 'D#',
                            'Eb', 'E', 'E#',
                            'Fb', 'F', 'F#',
                            'Gb', 'G', 'G#',
                            'Ab', 'A', 'A#',
                            'Bb', 'B', 'B#'];

  constructor(
    private converterService: ConverterService,
    private messageDialogService: MessageDialogService
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
    const file = this.files[0];
    this.converterService.midiToEsac({ midi: file, key: this.key })
      .subscribe(data => {
        this.converted.emit(data);
        this.converting = false;
      },
      error => {
        this.messageDialogService.displayMessageDialog('Invalid file or key');
        this.converting = false;
      });
  }
}

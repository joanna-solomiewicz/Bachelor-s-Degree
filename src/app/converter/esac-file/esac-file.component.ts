import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ConverterService } from '../services/converter.service';

@Component({
  selector: 'esac-file',
  templateUrl: './esac-file.component.html',
  styleUrls: ['./esac-file.component.scss']
})
export class EsacFileComponent implements OnInit {

  @ViewChild('file') file;
  @ViewChild('fileName') fileName;
  @Output() converted = new EventEmitter();

  constructor(
    private converterService: ConverterService
  ) { }

  ngOnInit() {
  }

  private form: FormGroup = new FormGroup({
    fileName: new FormControl()
  });

  private onChangeFile(): void {
    this.showFileName(this.file.nativeElement.files);
  }

  private showFileName(files: Object): void {
    if (files && files[0]) {
      this.fileName.nativeElement.value = files[0].name;
    } else {
      this.fileName.nativeElement.value = null;
    }
  }

  private chooseFile(): void {
    let files = this.file.nativeElement.files;
    if (files && files[0]) {
      let file = files[0];
      this.converterService.esacToMidiFile(file)
        .subscribe(response => {
          this.converted.emit(response);
          this.resetFileInput();
        },
        error => {
          this.converted.emit(error);
          this.resetFileInput();
        });
    }
  }

  private isFileSelected(): boolean {
    return this.file.nativeElement.files[0];
  }

  private resetFileInput(): void {
    this.file.nativeElement.value = null;
    this.fileName.nativeElement.value = null;
  }
}

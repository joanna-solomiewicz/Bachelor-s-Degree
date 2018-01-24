import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { ConverterService } from '../services/converter.service';

@Component({
  selector: 'esac-convert-file',
  templateUrl: './esac-convert-file.component.html',
  styleUrls: ['./esac-convert-file.component.scss']
})
export class EsacConvertFileComponent implements OnInit {

  @ViewChild('file') file;
  private files = [];
  private converting: boolean = false;
  @Output() converted = new EventEmitter();

  constructor(
    private converterService: ConverterService
  ) { }

  ngOnInit() {
  }

  private onChooseFiles(): void {
    if (this.file) {
      for (let file of this.file.nativeElement.files) {
        this.files.push(file);
      }
    }
  }

  private onDeleteFiles(index?: number): void {
    if (index) this.files.splice(index, 1);
    else this.files = [];
  }

  private isFilesChosen(): boolean {
    return this.files.length ? true : false;
  }


  private submit(): void {
    this.converting = true;
    this.converterService.esacFileToEsacObject(this.files[0])
      .subscribe(data => {
        this.converted.emit(data);
      },
      error => {
      },
      () => {
        this.converting = false;
      })
  }

}

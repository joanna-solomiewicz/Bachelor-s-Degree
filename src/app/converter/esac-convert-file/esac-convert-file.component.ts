import { Component, OnInit, ViewChild } from '@angular/core';

import { ConverterService } from '../services/converter.service';

@Component({
  selector: 'esac-convert-file',
  templateUrl: './esac-convert-file.component.html',
  styleUrls: ['./esac-convert-file.component.scss']
})
export class EsacConvertFileComponent implements OnInit {

  @ViewChild('file') file;
  private files = [];

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
}

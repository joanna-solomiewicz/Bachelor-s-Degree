import { Component, OnInit, ViewChild } from '@angular/core';

import { ConverterService } from '../services/converter.service';

@Component({
  selector: 'esac-file',
  templateUrl: './esac-file.component.html',
  styleUrls: ['./esac-file.component.scss']
})
export class EsacFileComponent implements OnInit {

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

  private onDeleteFile(index: number): void {
    this.files.splice(index, 1);
  }

  private isFilesChosen(): boolean {
    return this.files.length? true : false;
  }
}

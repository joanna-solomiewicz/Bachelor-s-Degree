import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'esac-add-file',
  templateUrl: './esac-add-file.component.html',
  styleUrls: ['./esac-add-file.component.scss']
})
export class EsacAddFileComponent implements OnInit {
  @ViewChild('file') file;
  private files = [];

  constructor() { }

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
    if (index) {
      this.files.splice(index, 1);
    } else {
      this.files = [];
    }
  }

  private isFilesChosen(): boolean {
    return this.files.length ? true : false;
  }
}

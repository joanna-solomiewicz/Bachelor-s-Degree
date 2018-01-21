import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'esac-add-file',
  templateUrl: './esac-add-file.component.html',
  styleUrls: ['./esac-add-file.component.scss']
})
export class EsacAddFileComponent implements OnInit {

  @ViewChild('file') file;
  private files = [];
  private createNewEsacFromURL: string = '/api/esac?parse=file';

  constructor(
    private http: HttpClient
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
    if (index) {
      this.files.splice(index, 1);
    } else {
      this.files = [];
    }
  }

  private isFilesChosen(): boolean {
    return this.files.length ? true : false;
  }

  private addEsacFile(): any {
    const input = new FormData();
    input.append('file', this.files[0]);

    return this.http.put(this.createNewEsacFromURL, input).subscribe();
  }
}

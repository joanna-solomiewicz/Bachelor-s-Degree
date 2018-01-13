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
    this.converted.emit([
      {esac: {"name":"DWOK01","title":"Wezme ja kontusz","region":"Mazowsze i Krakowskie","source":"Oskar Kolberg, Opera omnia, vol 1, p. 3-4","signature":"0100100000","key":"K0001a 08  A 3/4 2/4","melody":"1_3b21-7  1_3b21-7  123b_4_  5__\n    556b543b  22543b2  13b5_-7_  1__. //","remarks":""}, midi: "", midi64url: ""},
      {esac: {"name":"DWOK01","title":"Wezme ja kontusz","region":"Mazowsze i Krakowskie","source":"Oskar Kolberg, Opera omnia, vol 1, p. 3-4","signature":"0100100000","key":"K0001a 08  A 3/4 2/4","melody":"1_3b21-7  1_3b21-7  123b_4_  5__\n    556b543b  22543b2  13b5_-7_  1__. //","remarks":""}, midi: "", midi64url: ""},
      {esac: {"name":"DWOK01","title":"Wezme ja kontusz","region":"Mazowsze i Krakowskie","source":"Oskar Kolberg, Opera omnia, vol 1, p. 3-4","signature":"0100100000","key":"K0001a 08  A 3/4 2/4","melody":"1_3b21-7  1_3b21-7  123b_4_  5__\n    556b543b  22543b2  13b5_-7_  1__. //","remarks":""}, midi: "", midi64url: ""}
    ]);
    // this.converting = true;
  //   this.converterService.esacToMidiFile(this.files)
  //     .subscribe(data => {
  //       this.converted.emit(data);
  //     },
  //     error => {
  //       console.log('Error downloading file: ', error)
  //       this.converted.emit(error);
  //     },
  //     () => this.converting = false);
  // }

}

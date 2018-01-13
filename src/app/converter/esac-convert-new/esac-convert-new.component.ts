import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ConverterService } from '../services/converter.service';

@Component({
  selector: 'esac-convert-new',
  templateUrl: './esac-convert-new.component.html',
  styleUrls: ['./esac-convert-new.component.scss']
})
export class EsacConvertNewComponent implements OnInit {

  private form: FormGroup;
  private converting: boolean = false;
  @Output() converted = new EventEmitter();

  constructor(
    private converterService: ConverterService
  ) { }

  ngOnInit() {
    this.form = this.newForm();
  }

  private submit(): void {
    this.converted.emit([
      {esac: {"name":"DWOK01","title":"Wezme ja kontusz","region":"Mazowsze i Krakowskie","source":"Oskar Kolberg, Opera omnia, vol 1, p. 3-4","signature":"0100100000","key":"K0001a 08  A 3/4 2/4","melody":"1_3b21-7  1_3b21-7  123b_4_  5__\n    556b543b  22543b2  13b5_-7_  1__. //","remarks":""}, midi: "", midi64url: ""},
      {esac: {"name":"DWOK01","title":"Wezme ja kontusz","region":"Mazowsze i Krakowskie","source":"Oskar Kolberg, Opera omnia, vol 1, p. 3-4","signature":"0100100000","key":"K0001a 08  A 3/4 2/4","melody":"1_3b21-7  1_3b21-7  123b_4_  5__\n    556b543b  22543b2  13b5_-7_  1__. //","remarks":""}, midi: "", midi64url: ""},
      {esac: {"name":"DWOK01","title":"Wezme ja kontusz","region":"Mazowsze i Krakowskie","source":"Oskar Kolberg, Opera omnia, vol 1, p. 3-4","signature":"0100100000","key":"K0001a 08  A 3/4 2/4","melody":"1_3b21-7  1_3b21-7  123b_4_  5__\n    556b543b  22543b2  13b5_-7_  1__. //","remarks":""}, midi: "", midi64url: ""}
    ]);
    // this.converting = true;
    // this.converterService.esacToMidiNew(this.form.value)
    //   .subscribe(data => {
    //     this.downloadMidi(data);
    //     this.converted.emit(data);
    //   },
    //   error => {
    //     console.log('Error downloading file: ', error)
    //     this.converted.emit(error);
    //   },
    //   () => this.converting = false);
  }

  private downloadMidi(data: ArrayBuffer): void {
    let link = document.createElement("a");
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    const content = data;
    const blob = new Blob([content], { type: 'audio/midi' });
    const url = window.URL.createObjectURL(blob);
    const fileName = 'midi.mid';

    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.click();
    window.URL.revokeObjectURL(url);
  }

  private newForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      title: new FormControl(''),
      source: new FormControl(''),
      region: new FormControl(''),
      signature: new FormControl(''),
      key: new FormControl('', [
        // Validators.required
      ]),
      melody: new FormControl('', [
        // Validators.required
      ]),
      remarks: new FormControl('')
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'esac-add-new',
  templateUrl: './esac-add-new.component.html',
  styleUrls: ['./esac-add-new.component.scss']
})
export class EsacAddNewComponent implements OnInit {

  private form: FormGroup;

  private createNewEsacFromFromURL: string = '/api/esac';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.form = this.newForm();
  }

  private addEsac(): any {
    console.log(this.form.value);

    return this.http.put(this.createNewEsacFromFromURL, this.form.value).subscribe(data => {
          console.log('Success');
        },
        error => {
          console.log('Error downloading file: ', error);
        });
    // return this.http.post(this.urlEsac2Midi, esac, { responseType: 'arraybuffer' });

    // return this.http.post(this.urlEsac2MidiNew, form, { responseType: 'arraybuffer' });
    // this.converterService.esacToMidiNew(this.form.value)
    //   .subscribe(data => {
    //     this.downloadMidi(data);
    //     this.converted.emit(data);
    //   },
    //   error => {
    //     console.log('Error downloading file: ', error)
    //     this.converted.emit(error);
    //   },
  }

  private newForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      title: new FormControl(''),
      source: new FormControl(''),
      region: new FormControl(''),
      signature: new FormControl(''),
      key: new FormControl('', [
        Validators.required
      ]),
      melody: new FormControl('', [
        Validators.required
      ]),
      remarks: new FormControl('')
    });
  }
}

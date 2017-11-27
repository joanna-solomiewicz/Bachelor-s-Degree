import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EsacToMidiService } from '../services/esac-to-midi.service';
import { pattern } from './regexp';

@Component({
  selector: 'new-esac',
  templateUrl: './new-esac.component.html',
  styleUrls: ['./new-esac.component.scss']
})
export class NewEsacComponent implements OnInit {

  private form: FormGroup;

  constructor(
    private esacToMidiService: EsacToMidiService
  ) { }

  ngOnInit() {
    this.form = this.newForm();
  }

  private submit(): void {
    this.esacToMidiService.submitEsac(this.form.value)
      .subscribe(data => {
        this.downloadMidi(data);
      },
      error => {
        console.log('Error downloading file: ', error)
      }, () => {
        this.form = this.newForm();
      });
  }

  private downloadMidi(data: ArrayBuffer): void {
    const blob = new Blob([data], { type: 'audio/midi' });
    // const file = new File([blob], 'file.mid', { type: 'audio/midi' });

    const url = window.URL.createObjectURL(blob);
    window.open(url);
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
        Validators.required,
        Validators.pattern(pattern)
      ]),
      remarks: new FormControl('')
    });
  }
}

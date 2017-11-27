import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { EsacToMidiService } from '../services/esac-to-midi.service';
import { pattern } from './regexp';

@Component({
  selector: 'new-esac',
  templateUrl: './new-esac.component.html',
  styleUrls: ['./new-esac.component.scss']
})
export class NewEsacComponent {

  private form: FormGroup = new FormGroup({
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

  constructor(
    private esacToMidiService: EsacToMidiService
  ) { }

  private submit(): void {
    this.esacToMidiService.submitEsac(this.form.value)
      .subscribe(data => {
        this.downloadMidi(data);
      },
      error => {
        console.log('Error downloading file: ', error)
      });
  }

  private downloadMidi(data: ArrayBuffer): void {
    const blob = new Blob([data], { type: 'audio/midi' });
    // const file = new File([blob], 'file.mid', { type: 'audio/midi' });

    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}

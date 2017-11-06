import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-esac-midi-conversion',
  templateUrl: './esac-midi-conversion.component.html',
  styleUrls: ['./esac-midi-conversion.component.scss']
})
export class EsacMidiConversionComponent {

  form = new FormGroup({
    dwok: new FormControl(),
    cut: new FormControl(),
    trd: new FormControl(),
    sig: new FormControl(),
    key: new FormControl(),
    mel: new FormControl(null, [
      Validators.required, 
      Validators.pattern("[0-7\+\-\^\#b\ ]+")
    ]),
    bem: new FormControl()
  });

  private submit(): void {
    console.log(this.form.value);
  }

}

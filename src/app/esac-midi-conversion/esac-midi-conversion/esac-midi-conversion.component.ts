import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpRequest } from "@angular/common/http";
import 'rxjs/Rx';

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
      Validators.pattern("(?:[0-7\+\-\^\#b\ \.\_\(\)]|\n\ \ \ \ |\ \/\/)+")
    ]),
    bem: new FormControl()
  });
  private urlEsac2midi: string = '/esac2midi';

  constructor(private http: HttpClient) { }

  private submit(): void {
    this.http.post(this.urlEsac2midi, this.form.value, { responseType: 'arraybuffer' })
      .subscribe(data => {
        this.downloadMidi(data);
      },
      error => {
        console.log("Error downloading file: ", error)
      });
  }

  private downloadMidi(data): void {
    const blob = new Blob([data], { type: 'audio/midi' });
    // const file = new File([blob], 'file.mid', { type: 'audio/midi' });

    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

}

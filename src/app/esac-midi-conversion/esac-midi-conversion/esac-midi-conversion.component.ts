import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx' ;

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

  constructor(private http: HttpClient) { }

  private submit(): void {
    this.http.post('/esac2midi', this.form.value).subscribe(data => {
      this.downloadMidi(data);
    },
      error => console.log("Error downloading file: ", error));
  }

  private downloadMidi(data: Object): void {
    var blob = new Blob([data], { type: 'audio/midi' });
    var url = window.URL.createObjectURL(blob);
    window.open(url);
  }

}

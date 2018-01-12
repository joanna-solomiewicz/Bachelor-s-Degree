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
    this.converting = true;
    this.converterService.esacToMidiNew(this.form.value)
      .subscribe(data => {
        this.downloadMidi(data);
        this.converted.emit(data);
      },
      error => {
        console.log('Error downloading file: ', error)
        this.converted.emit(error);
      },
      () => this.converting = false);
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
        Validators.required
      ]),
      melody: new FormControl('', [
        Validators.required
      ]),
      remarks: new FormControl('')
    });
  }

}
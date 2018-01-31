import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ConverterService } from '../services/converter.service';
import { melody_regexp } from '../../shared/consts/regexp';

@Component({
  selector: 'app-esac-convert-new',
  templateUrl: './esac-convert-new.component.html',
  styleUrls: ['./esac-convert-new.component.scss']
})
export class EsacConvertNewComponent implements OnInit {

  private form: FormGroup;
  public converting = false;
  @Output() converted = new EventEmitter();

  constructor(
    private converterService: ConverterService
  ) { }

  ngOnInit() {
    this.form = this.newForm();
  }

  private submit(): void {
    this.converted.emit(this.form.value);
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
        Validators.pattern(melody_regexp)
      ]),
      remarks: new FormControl('')
    });
  }

}

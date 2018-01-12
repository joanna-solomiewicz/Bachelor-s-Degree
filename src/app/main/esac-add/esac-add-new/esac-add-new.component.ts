import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'esac-add-new',
  templateUrl: './esac-add-new.component.html',
  styleUrls: ['./esac-add-new.component.scss']
})
export class EsacAddNewComponent implements OnInit {

  private form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = this.newForm();
  }

  private addEsac(): void {
    console.log(this.form.value);
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

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() isSubmited = new EventEmitter<object>();

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.form = this.newForm();
  }

  private addEsac(): any {
    return this.http.put(this.createNewEsacFromFromURL, this.form.value).subscribe(data => {
        this.isSubmited.emit({text: 'Successs'});
      },
      error => {
        this.isSubmited.emit({text: 'Error downloading file. Please try again.'});
      });
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

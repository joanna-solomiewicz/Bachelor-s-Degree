import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { melody_regexp } from '../../../shared/consts/regexp';

@Component({
  selector: 'esac-add-new',
  templateUrl: './esac-add-new.component.html',
  styleUrls: ['./esac-add-new.component.scss']
})
export class EsacAddNewComponent implements OnInit {

  public form: FormGroup;
  private createNewEsacFromURL: string = '/api/esac';

  @Output() isSubmited = new EventEmitter<object>();

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.form = this.newForm();
  }

  public addEsac(): any {
    return this.http.put(this.createNewEsacFromURL, this.form.value).subscribe(data => {
        this.isSubmited.emit({text: 'EsAC added successfully'});
      },
      error => {
        this.isSubmited.emit({text: 'Error adding EsAC'});
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
        Validators.required,
        Validators.pattern(melody_regexp)
      ]),
      remarks: new FormControl('')
    });
  }
}

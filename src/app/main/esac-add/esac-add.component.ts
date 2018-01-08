import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'esac-add',
  templateUrl: './esac-add.component.html',
  styleUrls: ['./esac-add.component.scss']
})
export class EsacAddComponent implements OnInit {

  private form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EsacAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.form = this.newForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private addEsac(): void {
    console.log(this.form.value);
    this.dialogRef.close();
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

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { melody_regexp } from '../../shared/consts/regexp';

@Component({
  selector: 'esac-edit-dialog',
  templateUrl: './esac-edit-dialog.component.html',
  styleUrls: ['./esac-edit-dialog.component.scss']
})
export class EsacEditDialogComponent implements OnInit {

  private form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EsacEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    this.form = this.fillForm();
  }

  private editEsac(): void {
    this.dialogRef.close(this.form.value);
  }

  private fillForm(): FormGroup {
    let esac = this.data;
    return new FormGroup({
      name: new FormControl(esac.name),
      title: new FormControl(esac.title),
      source: new FormControl(esac.source),
      region: new FormControl(esac.region),
      signature: new FormControl(esac.signature),
      key: new FormControl(esac.key, [
        Validators.required
      ]),
      melody: new FormControl(esac.melody, [
        Validators.required,
        Validators.pattern(melody_regexp)
      ]),
      remarks: new FormControl(esac.remarks)
    });
  }
}

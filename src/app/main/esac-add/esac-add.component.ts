import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'esac-add',
  templateUrl: './esac-add.component.html',
  styleUrls: ['./esac-add.component.scss']
})
export class EsacAddComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EsacAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

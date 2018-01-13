import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'esac-delete-dialog',
  templateUrl: './esac-delete-dialog.component.html',
  styleUrls: ['./esac-delete-dialog.component.scss']
})
export class EsacDeleteDialogComponent implements OnInit {

  private confirmation: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<EsacDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
  }

  private confirm(decision: boolean): void {
    this.dialogRef.close(decision);
  }
}

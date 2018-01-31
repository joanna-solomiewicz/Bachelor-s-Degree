import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'esac-delete-dialog',
  templateUrl: './esac-delete-dialog.component.html',
  styleUrls: ['./esac-delete-dialog.component.scss']
})
export class EsacDeleteDialogComponent implements OnInit {

  private confirmation = false;

  constructor(
    public dialogRef: MatDialogRef<EsacDeleteDialogComponent>,
  ) { }

  ngOnInit() {
  }

  public confirm(decision: boolean): void {
    this.dialogRef.close(decision);
  }
}

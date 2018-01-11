import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'esac-convert-dialog',
  templateUrl: './esac-convert-dialog.component.html',
  styleUrls: ['./esac-convert-dialog.component.scss']
})
export class EsacConvertDialogComponent implements OnInit {

  private esacs: [any];

  constructor(
    public dialogRef: MatDialogRef<EsacConvertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.setInfoData();
  }

  private setInfoData(): void {
    this.esacs = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

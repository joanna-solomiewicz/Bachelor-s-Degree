import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'esac-add-dialog',
  templateUrl: './esac-add-dialog.component.html',
  styleUrls: ['./esac-add-dialog.component.scss']
})
export class EsacAddDialogComponent implements OnInit {

  public step: number = 0;
  private lastStep: number = 2;
  private sourceType: number;
  public progress: number = 0;

  constructor(
    public dialogRef: MatDialogRef<EsacAddDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  private chooseSource(source: number): void {
    this.sourceType = source;
    this.step++;
    this.updateProgress();
  }

  private prevStep(): void {
    if (this.step > 0) this.step--;
    this.updateProgress();
  }

  private updateProgress(): void {
    this.progress = this.step * 100 / this.lastStep;
  }
}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'esac-add',
  templateUrl: './esac-add.component.html',
  styleUrls: ['./esac-add.component.scss']
})
export class EsacAddComponent implements OnInit {

  public step: number = 0;
  private lastStep: number = 2;
  private sourceType: number;
  public progress: number = 0;

  constructor(
    public dialogRef: MatDialogRef<EsacAddComponent>,
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

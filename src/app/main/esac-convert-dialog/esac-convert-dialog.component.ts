import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import * as FileSaver from 'file-saver';

import { MainService } from '../services/main.service';

@Component({
  selector: 'esac-convert-dialog',
  templateUrl: './esac-convert-dialog.component.html',
  styleUrls: ['./esac-convert-dialog.component.scss']
})
export class EsacConvertDialogComponent implements OnInit {

  private esacs: [any];

  constructor(
    public dialogRef: MatDialogRef<EsacConvertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.setInfoData();
  }

  private downloadMidi(esac): void {
    this.mainService.esacToMidi(esac)
      .subscribe(data => {
        let blob = new Blob([data], { type: 'audio/midi' });
        FileSaver.saveAs(blob, esac.name + '_' + esac.title + '.mid');
      },
      error => {
        console.log('Error downloading file: ', error)
      });
  }

  private setInfoData(): void {
    this.esacs = this.data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

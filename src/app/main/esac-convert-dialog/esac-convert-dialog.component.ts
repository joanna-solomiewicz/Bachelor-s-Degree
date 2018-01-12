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

  private esacs: any[];
  private downloading: boolean[];

  constructor(
    public dialogRef: MatDialogRef<EsacConvertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.setInfoData();
  }

  private downloadMidi(esac, index: number): void {
    this.downloading[index] = true;
    this.mainService.esacToMidi(esac)
      .subscribe(data => {
        let blob = new Blob([data], { type: 'audio/midi' });
        FileSaver.saveAs(blob, esac.name + '_' + esac.title + '.mid');
      },
      error => {
        console.log('Error downloading file: ', error)
      },
      () => this.downloading[index] = false);
  }

  private setInfoData(): void {
    this.esacs = this.data;
    this.downloading = Array<boolean>(this.esacs.length).fill(false);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

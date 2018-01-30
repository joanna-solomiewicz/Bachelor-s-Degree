import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import * as FileSaver from 'file-saver';

import { MainService } from '../services/main.service';
import { MidiPlayerService } from '../services/midi-player.service';

@Component({
  selector: 'one-esac-convert-dialog',
  templateUrl: './one-esac-convert-dialog.component.html',
  styleUrls: ['./one-esac-convert-dialog.component.scss']
})
export class OneEsacConvertDialogComponent implements OnInit {

  public esac: any;

  constructor(
    public dialogRef: MatDialogRef<OneEsacConvertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mainService: MainService,
    private midiPlayerService: MidiPlayerService
  ) { }

  ngOnInit() {
    this.esac = this.data;
  }

  closeDialog(): void {
    this.midiPlayerService.stopMidi();
  }
}

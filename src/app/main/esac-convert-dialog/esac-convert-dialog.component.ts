import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import * as FileSaver from 'file-saver';

import { MainService } from '../services/main.service';
import { MidiPlayerService } from '../services/midi-player.service';
import { MessageDialogService } from '../../shared/services/message-dialog.service';

@Component({
  selector: 'esac-convert-dialog',
  templateUrl: './esac-convert-dialog.component.html',
  styleUrls: ['./esac-convert-dialog.component.scss']
})
export class EsacConvertDialogComponent implements OnInit {

  public esacs: any[];
  private downloading: boolean[];

  constructor(
    public dialogRef: MatDialogRef<EsacConvertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mainService: MainService,
    private midiPlayerService: MidiPlayerService,
    private messageDialogService: MessageDialogService
  ) { }

  ngOnInit() {
    this.setInfoData();
  }

  private setInfoData(): void {
    this.esacs = this.data;
  }

  closeDialog(): void {
    this.midiPlayerService.stopMidi();
  }

  downloadAllMidi() {
    this.mainService.multipleEsacToMidiFile(this.esacs)
      .subscribe(data => {
        data.forEach((midi, index) => {
          const blob = new Blob([midi], { type: 'audio/midi' });
          const esac = this.esacs[index];
          FileSaver.saveAs(blob, esac.name + '_' + esac.title + '.mid');
        });
      }, error => {
        this.messageDialogService.displayMessageDialog('Error downloading EsACs');
      });
  }
}

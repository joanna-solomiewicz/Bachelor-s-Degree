import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import { MatDialog } from '@angular/material';

import * as FileSaver from 'file-saver';

import { MainService } from './../services/main.service';
import { EsacService } from './../services/esac.service';
import { MidiPlayerService } from './../services/midi-player.service';

import { OneEsacConvertDialogComponent } from './../one-esac-convert-dialog/one-esac-convert-dialog.component';
import { EsacEditDialogComponent } from './../esac-edit-dialog/esac-edit-dialog.component';
import { EsacDeleteDialogComponent } from './../esac-delete-dialog/esac-delete-dialog.component';

@Component({
  selector: 'main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.scss']
})
export class MainCardComponent implements OnInit {

  constructor(
    private mainService: MainService,
    public dialog: MatDialog,
    public esacService: EsacService,
    private midiPlayerService: MidiPlayerService
  ) { }

  @Input() esac: any;
  @Input() isExpanded: boolean;

  ngOnInit() {
  }

  ngOnDestroy() {
    this.stopMidi();
  }

  convertEsac(index: number): void {
    const esac = this.esac;

    let dialogRef = this.dialog.open(OneEsacConvertDialogComponent, {
      autoFocus: false,
      minWidth: 300,
      disableClose: true,
      data: esac
    });
  }

  public playMidi(): void {
    this.mainService.esacToMidi(this.esac)
      .subscribe(data => {
        this.esac.isPlaying = true;
        this.midiPlayerService.setMidiSong(data, this.esac.id);
        this.midiPlayerService.playMidi();
      },
      error => {
        console.log('Error downloading file: ', error);
      });
  }

  public stopMidi(): void {
    this.esac.isPlaying = false;
    this.midiPlayerService.stopMidi();
  }

  public isMidiPlaying(): boolean {
    return this.checkEsacId() && this.esac.isPlaying && this.midiPlayerService.isMidiPlaying();
  }

  private checkEsacId(): boolean {
    return this.esac.id === this.midiPlayerService.getEsacId();
  }

  editEsac(): void {
    let esac = this.esac;
    let dialogRef = this.dialog.open(EsacEditDialogComponent, {
      autoFocus: false,
      minWidth: 300,
      disableClose: true,
      data: esac
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.mainService.updateEsac(esac.id, result).subscribe();
        this.esac = result;
      }
    });
  }

  deleteEsac(esacId: string): void {
    let esac = this.esac;
    let dialogRef = this.dialog.open(EsacDeleteDialogComponent, {
      autoFocus: false,
      minWidth: 300,
      disableClose: true,
      data: esac
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.mainService.deleteEsac(esac.id).subscribe();
        this.esacService.deleteEsac(esacId);
      }
    });
  }

  private downloadEsac(): void {
    const esac = this.esac;
    const content = this.esacToString(esac);
    const blob = new Blob([content], { type: 'text/plain' });
    FileSaver.saveAs(blob, esac.name + '_' + esac.title + '.txt');
  }

  private esacToString(esac): string {
    let string = '';
    string += esac.name + '\n';
    string += 'CUT[' + esac.title + ']\n';
    string += 'REG[' + esac.region + ']\n';
    string += 'TRD[' + esac.source + ']\n';
    string += 'SIG[' + esac.signature + ']\n';
    string += 'KEY[' + esac.key + ']\n';
    string += 'MEL[' + esac.melody + ']\n';
    string += 'BEM[' + esac.remarks + ']\n';
    string += '\n';

    return string;
  }

  public toggleCard(): void {
    this.isExpanded = !this.isExpanded;
    if (!this.isExpanded) {
      this.stopMidi();
    }
  }

}

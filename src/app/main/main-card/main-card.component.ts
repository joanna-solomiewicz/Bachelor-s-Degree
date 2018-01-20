import { Component, OnInit, Input } from '@angular/core';

import { MatDialog } from '@angular/material';

import * as FileSaver from 'file-saver';

import { MainService } from './../services/main.service';
import { EsacService } from './../services/esac.service';

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
    public esacService: EsacService
  ) { }

  @Input() esac: any;
  @Input() isExpanded: boolean;

  ngOnInit() {
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

  private downloadEsac(index: number): void {
    const esac = this.esac;
    const content = this.esacToString(esac);
    const blob = new Blob([content], { type: 'text/plain' });
    FileSaver.saveAs(blob, 'esacs.txt');
  }

  private esacToString(esacs): string {
    let string = '';
    for (let esac of esacs) {
      string += esac.name + '\n';
      string += 'CUT[' + esac.title + ']\n';
      string += 'REG[' + esac.region + ']\n';
      string += 'TRD[' + esac.source + ']\n';
      string += 'SIG[' + esac.signature + ']\n';
      string += 'KEY[' + esac.key + ']\n';
      string += 'MEL[' + esac.melody + ']\n';
      string += 'BEM[' + esac.remarks + ']\n';
      string += '\n';
    }

    return string;
  }

  public toggleCard(): void {
    this.isExpanded = !this.isExpanded;
  }

}

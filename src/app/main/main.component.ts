import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import * as FileSaver from 'file-saver';

import { MainService } from './services/main.service';
import { EsacAddDialogComponent } from './esac-add-dialog/esac-add-dialog.component';
import { EsacConvertDialogComponent } from './esac-convert-dialog/esac-convert-dialog.component';
import { EsacEditDialogComponent } from './esac-edit-dialog/esac-edit-dialog.component';
import { EsacDeleteDialogComponent } from './esac-delete-dialog/esac-delete-dialog.component';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public esacs = null;  //typ
  private esacsExpanded: boolean[] = [];
  private searchTerm: string = '';
  private searchTerms = [];
  private searchType;
  private searchTypes: string[] = ['Name', 'CUT', 'REG', 'TRD', 'SIG', 'KEY', 'MEL', 'BEM', 'Melody', 'Rhythm'];

  constructor(
    private mainService: MainService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getEsacs();
  }

  public isEsacs(): boolean {
    return !this.esacs || this.esacs.length === 0 ? false : true;
  }

  private search(): void {
    this.searchTerms.push({ type: this.searchType, term: this.searchTerm });
    this.mainService.searchEsacs(this.searchTerms).subscribe(
      data => {
        this.esacs = data;
      }, error => {
        console.log('GET /esacs error');
      });
    this.resetSearch();
  }

  private removeSearch(index: number): void {
    this.searchTerms.splice(index, 1);
    this.mainService.searchEsacs(this.searchTerms).subscribe(
      data => {
        this.esacs = data;
      }, error => {
        console.log('GET /esacs error');
      });
  }

  private resetSearch(): void {
    this.searchTerm = '';
    this.searchType = undefined;
  }

  private isSearchIncomplete(): boolean {
    return this.searchType === undefined || this.searchTerm === '';
  }

  private getEsacs(): void {
    this.mainService.getEsacs().subscribe(
      data => {
        this.esacs = data;
        this.fillEsacsExpanded(this.esacs.length);
      }, error => {
        console.log('GET /esacs error');
      }
    );
  }

  private fillEsacsExpanded(length: number): void {
    for (let i = 0; i < length; i++) {
      this.esacsExpanded.push(false);
    }
  }

  private toggleCard(index: number): void {
    this.esacsExpanded[index] = !this.esacsExpanded[index];
  }

  public expandAll(): void {
    this.esacsExpanded.fill(true);
  }

  public closeAll(): void {
    this.esacsExpanded.fill(false);
  }

  addEsac(): void {
    let dialogRef = this.dialog.open(EsacAddDialogComponent, {
      autoFocus: false,
      minWidth: 300,
      width: '80%',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      // use result
    });
  }

  convertEsac(index: number): void {
    let esacs;
    if (index === -1) esacs = this.esacs;
    else esacs = [this.esacs[index]];
    let dialogRef = this.dialog.open(EsacConvertDialogComponent, {
      autoFocus: false,
      minWidth: 300,
      disableClose: true,
      data: esacs
    });
  }

  editEsac(index: number): void {
    let esac = this.esacs[index];
    let dialogRef = this.dialog.open(EsacEditDialogComponent, {
      autoFocus: false,
      minWidth: 300,
      disableClose: true,
      data: esac
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.esacs[index] = result;
      }
    });
  }

  deleteEsac(index: number): void {
    let esac = this.esacs[index];
    let dialogRef = this.dialog.open(EsacDeleteDialogComponent, {
      autoFocus: false,
      minWidth: 300,
      disableClose: true,
      data: esac
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.esacs.splice(index, 1);
    });
  }

  private downloadEsac(index: number): void {
    let esacs;
    if (index === -1) esacs = this.esacs;
    else esacs = [this.esacs[index]];

    const content = this.esacToString(esacs);
    let blob = new Blob([content], { type: 'text/plain' });
    FileSaver.saveAs(blob, 'esacs.txt');
  }

  private esacToString(esacs): string { //typ
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
      string += '\n'
    }

    return string;
  }
}

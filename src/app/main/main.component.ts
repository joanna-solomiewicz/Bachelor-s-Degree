import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import * as FileSaver from 'file-saver';

import { MainService } from './services/main.service';
import { EsacService } from './services/esac.service';

import { EsacAddDialogComponent } from './esac-add-dialog/esac-add-dialog.component';
import { EsacConvertDialogComponent } from './esac-convert-dialog/esac-convert-dialog.component';
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
  private searchField;
  private searchFields: Object[] = [
    { "field": "name", "placeholder": "Name" },
    { "field": "title", "placeholder": "CUT" },
    { "field": "region", "placeholder": "REG" },
    { "field": "source", "placeholder": "TRD" },
    { "field": "signature", "placeholder": "SIG" },
    { "field": "key", "placeholder": "KEY" },
    { "field": "melody", "placeholder": "MEL" },
    { "field": "melody_raw", "placeholder": "Raw melody" },
    { "field": "melody_rhythm", "placeholder": "Rhythm" },
    { "field": "remarks", "placeholder": "BEM" }
  ]

  constructor(
    private mainService: MainService,
    public dialog: MatDialog,
    private esacService: EsacService
  ) { }

  ngOnInit() {
    this.getEsacs();
  }

  private getEsacs(): void {
    this.mainService.getEsacs().subscribe(
      data => {
        this.esacService.setEsacs(data);
        this.esacs = this.esacService.getEsacs();
        this.fillEsacsExpanded(this.esacs.length);
      }, error => {
        console.log('GET /esacs error');
      }
    );
  }

  public isAnyEsac(): boolean {
    return !this.esacs || this.esacs.length === 0 ? false : true;
  }

  private search(): void {
    if (!this.isSearchIncomplete()) {
      this.searchTerms.push({ field: this.searchField, term: this.searchTerm });
    }
    this.mainService.searchEsacs(this.searchTerms).subscribe(
      data => {
        this.esacService.setEsacs(data);
        this.esacs = this.esacService.getEsacs();
      }, error => {
      });
    this.resetSearch();
  }

  private removeSearch(index: number): void {
    this.searchTerms.splice(index, 1);
    this.mainService.searchEsacs(this.searchTerms).subscribe(
      data => {
        this.esacService.setEsacs(data);
        this.esacs = this.esacService.getEsacs();
      }, error => {
      });
  }

  private resetSearch(): void {
    this.searchTerm = '';
    this.searchField = undefined;
  }

  private isSearchIncomplete(): boolean {
    return this.searchField === undefined || this.searchTerm === '';
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

    dialogRef.afterClosed().subscribe(() => {
      this.search();
    });
  }

  convertEsac(index: number): void {
    let esacs = this.esacService.getEsacs();

    let dialogRef = this.dialog.open(EsacConvertDialogComponent, {
      autoFocus: false,
      minWidth: 300,
      disableClose: true,
      data: esacs
    });
  }

  private downloadEsac(): void {
    let esacs = this.esacService.getEsacs();

    const content = this.esacsToString(esacs);
    let blob = new Blob([content], { type: 'text/plain' });
    FileSaver.saveAs(blob, 'esacs.txt');
  }

  private esacsToString(esacs): string { //typ
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
}

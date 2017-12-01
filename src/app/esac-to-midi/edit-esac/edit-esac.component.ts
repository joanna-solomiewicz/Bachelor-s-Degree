import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatOptionSelectionChange } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { startWith, map } from 'rxjs/operators';

import { EsacToMidiService } from '../services/esac-to-midi.service';

export class Esac { 
  name: string;
  title: string;
  source: string;
  region: string;
  signature: string;
  key: string;
  melody: string;
  remarks: string;
}

@Component({
  selector: 'edit-esac',
  templateUrl: './edit-esac.component.html',
  styleUrls: ['./edit-esac.component.scss']
})
export class EditEsacComponent implements OnInit {

  private searchEsacForm: FormGroup;
  private searchEsacFormControl: FormControl;
  private filteredEsacs: Observable<any[]>;
  private esacSelected: boolean = false;
  private esacList;
  private editEsacForm: FormGroup;


  constructor(
    private esacToMidiService: EsacToMidiService
  ) { }

  ngOnInit() {
    this.getEsacs();
    this.initSearchInput();
    this.editEsacForm = this.newFormGroup();
  }

  private onEsacSelection(event: MatOptionSelectionChange, esac: Esac): void {
    if( event.source.selected === true ) {
      this.esacSelected = true;
      this.fillEsacForm(esac);
    }
  }

  private fillEsacForm(esac: Esac): void {
    this.editEsacForm = this.newFormGroup();
    this.editEsacForm.setControl('name', new FormControl(esac.name));
    this.editEsacForm.setControl('title', new FormControl(esac.title));
    this.editEsacForm.setControl('source', new FormControl(esac.source));
    this.editEsacForm.setControl('region', new FormControl(esac.region));
    this.editEsacForm.setControl('signature', new FormControl(esac.signature));
    this.editEsacForm.setControl('key', new FormControl(esac.key));
    this.editEsacForm.setControl('melody', new FormControl(esac.melody));
    this.editEsacForm.setControl('remarks', new FormControl(esac.remarks));
  }

  private getEsacs(): void {
    this.esacToMidiService.getEsacs()
      .subscribe(data => {
        this.esacList = data;
        this.setSearchFiltering();
      },
      error => console.log('Error getting esacs: ', error));
  }

  private setSearchFiltering(): void {
    this.filteredEsacs = this.searchEsacFormControl.valueChanges
      .pipe(
      startWith(''),
      map(search => search ? this.filterEsacs(search) : this.esacList)
      );
  }

  private filterEsacs(search: string) {
    return this.esacList.filter(esac => esac.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }

  private initSearchInput(): void {
    this.searchEsacForm = new FormGroup({});
    this.searchEsacFormControl = new FormControl();
  }

  private newFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      title: new FormControl(''),
      source: new FormControl(''),
      region: new FormControl(''),
      signature: new FormControl(''),
      key: new FormControl(''),
      melody: new FormControl(''),
      remarks: new FormControl('')
    });
  }

}

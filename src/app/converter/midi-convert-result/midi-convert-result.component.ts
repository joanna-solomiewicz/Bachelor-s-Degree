import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import * as FileSaver from 'file-saver';

import { MidiPlayerService } from './../../main/services/midi-player.service';
import { MainService } from './../../main/services/main.service';

@Component({
  selector: 'midi-convert-result',
  templateUrl: './midi-convert-result.component.html',
  styleUrls: ['./midi-convert-result.component.scss']
})
export class MidiConvertResultComponent implements OnInit {

  @Input() esac;
  private form: FormGroup;
  public speedData = this.midiPlayerService.getSpeedData();
  private createNewEsacFromURL: string = '/api/esac';

  constructor(
    private http: HttpClient,
    private mainService: MainService,
    private midiPlayerService: MidiPlayerService
  ) { }

  ngOnInit() {
    this.form = this.fillForm();
  }

  ngOnDestroy() {
    this.stopMidi();
  }

  private fillForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(this.esac.name),
      title: new FormControl(this.esac.title),
      source: new FormControl(this.esac.source),
      region: new FormControl(this.esac.region),
      signature: new FormControl(this.esac.signature),
      key: new FormControl(this.esac.key, [
        Validators.required
      ]),
      melody: new FormControl(this.esac.melody, [
        Validators.required
      ]),
      remarks: new FormControl(this.esac.remarks)
    });
  }

  public isMidiPlaying(): boolean {
    return this.esac.isPlaying && this.midiPlayerService.isMidiPlaying();
  }

  public slowDownMidi(): void {
    this.midiPlayerService.slowDownMidi();
    this.speedData = this.midiPlayerService.getSpeedData();
  }

  public speedUpMidi(): void {
    this.midiPlayerService.speedUpMidi();
    this.speedData = this.midiPlayerService.getSpeedData();
  }

  public playMidi(): void {
    const esac = this.form.value;
    this.mainService.esacToMidi(esac)
      .subscribe(data => {
        this.esac.isPlaying = true;
        this.midiPlayerService.setMidiSong(data);
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

  public downloadEsac(): void {
    const esac = this.form.value;
    const content = this.esacToString(esac);
    const blob = new Blob([content], { type: 'text/plain' });
    FileSaver.saveAs(blob, esac.name + '_' + esac.title + '.txt');
  }

  public addEsac(): any {
    return this.http.put(this.createNewEsacFromURL, this.form.value)
      .subscribe(data => {
      })
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
}

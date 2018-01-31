import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import * as FileSaver from 'file-saver';

import { MidiPlayerService } from './../../main/services/midi-player.service';
import { MainService } from './../../main/services/main.service';
import { MessageDialogService } from '../../shared/services/message-dialog.service';
import { melody_regexp } from '../../shared/consts/regexp';

@Component({
  selector: 'midi-convert-result',
  templateUrl: './midi-convert-result.component.html',
  styleUrls: ['./midi-convert-result.component.scss']
})
export class MidiConvertResultComponent implements OnInit {

  @Input() esac;
  public form: FormGroup;
  public speedData = this.midiPlayerService.getSpeedData();
  private createNewEsacFromURL: string = '/api/esac';

  constructor(
    private http: HttpClient,
    private mainService: MainService,
    private midiPlayerService: MidiPlayerService,
    private messageDialogService: MessageDialogService
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
        Validators.required,
        Validators.pattern(melody_regexp)
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
        this.messageDialogService.displayMessageDialog('Error playing MIDI');
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
        this.messageDialogService.displayMessageDialog('EsAC added successfully');
      }, error => {
        this.messageDialogService.displayMessageDialog('Error adding EsAC');
      });
  }

  private esacToString(esac): string {
    let string = '';
    string += esac.name + '\r\n';
    string += 'CUT[' + esac.title + ']\r\n';
    string += 'REG[' + esac.region + ']\r\n';
    string += 'TRD[' + esac.source + ']\r\n';
    string += 'SIG[' + esac.signature + ']\r\n';
    string += 'KEY[' + esac.key + ']\r\n';
    string += 'MEL[' + esac.melody + ']\r\n';
    string += 'BEM[' + esac.remarks + ']\r\n';
    string += '\r\n';

    return string;
  }
}

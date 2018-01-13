import { Component, OnInit, Input } from '@angular/core';

import * as FileSaver from 'file-saver';

@Component({
  selector: 'esac-convert-result',
  templateUrl: './esac-convert-result.component.html',
  styleUrls: ['./esac-convert-result.component.scss']
})
export class EsacConvertResultComponent implements OnInit {

  @Input() midis;

  constructor() { }

  ngOnInit() {
  }

  private downloadMidi(index: number): void {
    const midi = this.midis[index];
    let content = midi.midi;
    let blob = new Blob([content], { type: 'audio/midi' });
    FileSaver.saveAs(blob, midi.esac.name + '_' + midi.esac.title + '.mid');
  }

}

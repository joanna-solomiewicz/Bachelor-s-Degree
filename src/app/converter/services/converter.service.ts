import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConverterService {

  private urlGetEsacs: string = '/api/esacs';
  private urlEsac2MidiFile: string = '/api/esac2midifile';
  private urlEsac2MidiNew: string = '/esac2midi'; //esac2midinew
  private urlMidi2Esac: string = '/midi2esac';

  constructor(
    private http: HttpClient
  ) { }

  getEsacs(): Observable<any> {
    return this.http.get(this.urlGetEsacs);
  }

  esacToMidiFile(files: any[]) {
    let input = new FormData();
    for (let file of files) {
      input.append(file.name, file);
    }

    return this.http.post(this.urlEsac2MidiFile, input);
  }

  esacToMidiNew(form: any) {
    return this.http.post(this.urlEsac2MidiNew, form, { responseType: 'arraybuffer' })
  }

  midiToEsac(form: any) {
    let input = new FormData();
    input.append(form.midi.name, form.midi);

    const queryParam = '?key=' + form.key;

    return this.http.post(this.urlMidi2Esac + queryParam, input);
  }
}

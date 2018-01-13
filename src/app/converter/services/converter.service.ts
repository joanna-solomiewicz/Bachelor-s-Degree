import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConverterService {

  private urlGetEsacs: string = '/esacs';
  private urlEsac2MidiFile: string = '/esac2midifile';
  private urlEsac2MidiNew: string = '/esac2midi'; //esac2midinew

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
}

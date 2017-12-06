import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConverterService {

  private urlGetEsacs: string = '/esacs'
  private urlEsac2Midi: string = '/esac2midifile'

  constructor(
    private http: HttpClient
  ) { }

  getEsacs(): Observable<any> {
    return this.http.get(this.urlGetEsacs);
  }

  esacToMidiFile(file: any) {
    let input = new FormData();
    input.append('file', file);

    return this.http.post(this.urlEsac2Midi, input);
  }
}

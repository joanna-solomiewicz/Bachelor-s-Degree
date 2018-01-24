import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConverterService {

  private urlEsacFile2EsacObject: string = '/api/esacjson';
  private urlMidi2Esac: string = '/api/midi2esac';

  constructor(
    private http: HttpClient
  ) { }

  esacFileToEsacObject(file: any): Observable<any> {
    const input = new FormData();
    input.append('file', file);

    return this.http.post(this.urlEsacFile2EsacObject, input);
  }

  midiToEsac(form: any): Observable<any> {
    let input = new FormData();
    input.append(form.midi.name, form.midi);

    const queryParam = '?key=' + form.key;

    return this.http.post(this.urlMidi2Esac + queryParam, input);
  }
}

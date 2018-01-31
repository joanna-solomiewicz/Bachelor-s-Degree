import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class MainService {

  private urlGetEsacs = '/api/esac/list';
  private urlEsac2Midi = '/api/esac2midi';
  private urlSearchEsacs = '/api/esac/search';
  private urlEsac2MidiFile = '/api/esac2midi?format=file';
  private esacEndpoint = '/api/esac';

  constructor(
    private http: HttpClient
  ) { }

  getEsacs(): Observable<any> {
    return this.http.get(this.urlGetEsacs);
  }

  esacToMidi(esac: any) {
    return this.http.post(this.urlEsac2Midi, esac);
  }

  esacToMidiFile(esac: any) {
    return this.http.post(this.urlEsac2MidiFile, esac, {responseType: 'arraybuffer'});
  }

  multipleEsacToMidiFile(esacs: any[]) {
    const httpCalls = [];
    for (const esac of esacs) {
      httpCalls.push(this.http.post(this.urlEsac2MidiFile, esac, {responseType: 'arraybuffer'}));
    }

    return forkJoin(httpCalls);
  }

  searchEsacs(terms: any): Observable<any> {
    return this.http.post(this.urlSearchEsacs, terms);
  }

  deleteEsac(id: any): Observable<any> {
    return this.http.delete(this.esacEndpoint + '/' + id);
  }

  updateEsac(id: any, result): Observable<any> {
    return this.http.patch(this.esacEndpoint + '/' + id, JSON.stringify(result));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MainService {

  private urlGetEsacs: string = '/esacs'
  private urlEsac2Midi: string = '/esac2midi';
  private urlSearchEsacs: string = '/esacs';

  constructor(
    private http: HttpClient
  ) { }

  getEsacs(): Observable<any> {
    return this.http.get(this.urlGetEsacs);
  }

  esacToMidi(esac: any) {
    return this.http.post(this.urlEsac2Midi, esac, { responseType: 'arraybuffer' })
  }

  searchEsacs(terms: any): Observable<any> {
    return this.http.post(this.urlSearchEsacs, terms);
  }
}
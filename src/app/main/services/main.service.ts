import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MainService {

  private urlGetEsacs: string = '/api/esac/list';
  private urlEsac2Midi: string = '/api/esac2midi';
  private urlSearchEsacs: string = '/api/esacs';
  private esacEndpoint: string = '/api/esac';

  constructor(
    private http: HttpClient
  ) { }

  getEsacs(): Observable<any> {
    return this.http.get(this.urlGetEsacs);
  }

  esacToMidi(esac: any) {
    return this.http.post(this.urlEsac2Midi, esac);
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

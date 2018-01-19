import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MainService {

  private urlGetEsacs: string = '/api/esac/list';
  private urlEsac2Midi: string = '/api/esac2midi';
  private urlSearchEsacs: string = '/api/esacs';
  private urlDeleteFile: string = '/api/esac';

  constructor(
    private http: HttpClient
  ) { }

  getEsacs(): Observable<any> {
    return this.http.get(this.urlGetEsacs);
  }

  esacToMidi(esac: any) {
    return this.http.post(this.urlEsac2Midi, esac, { responseType: 'arraybuffer' });
  }

  searchEsacs(terms: any): Observable<any> {
    return this.http.post(this.urlSearchEsacs, terms);
  }

  deleteEsac(id: number): Observable<any> {
    return this.http.delete(this.urlDeleteFile + id);
  }
}

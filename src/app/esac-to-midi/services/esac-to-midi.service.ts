import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class EsacToMidiService {

  private urlEsac2midi: string = '/esac2midi';
  private urlEsacs: string = '/esacs';

  constructor(
    private http: HttpClient
  ) { }

  uploadFile(file: any) {
    let input = new FormData();
    input.append('file', file);

    return this.http.post(this.urlEsac2midi, input);
  }

  submitEsac(form: any) {
    return this.http.post(this.urlEsac2midi, form, { responseType: 'arraybuffer' })
  }

  getEsacs() {
    return this.http.get(this.urlEsacs);
  }
}

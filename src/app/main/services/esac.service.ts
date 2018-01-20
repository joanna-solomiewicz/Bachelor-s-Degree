import { Injectable } from '@angular/core';

@Injectable()
export class EsacService {

  private esacs;

  constructor() { }

  public setEsacs(esacsArray): void {
    this.esacs = esacsArray;
  }

  public getEsacs(): any {
    return this.esacs;
  }

  public deleteEsac(id): void {
    const toDelete = this.esacs.find(x => x.id === id);
    const index = this.esacs.indexOf(toDelete);

    this.esacs.splice(index, 1);
  }
}

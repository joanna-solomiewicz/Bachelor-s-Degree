import { Component, OnInit } from '@angular/core';

import { MainService } from './services/main.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public esacs;  //typ
  private esacsExpanded: boolean[] = [];

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.getEsacs();
  }

  private getEsacs(): void {
    this.mainService.getEsacs().subscribe(
      data => {
        this.esacs = data;
        this.fillEsacsExpanded(this.esacs.length);
      }, error => {
        console.log('GET /esacs error');
      }
    )
  }

  private fillEsacsExpanded(length: number): void {
    for (let i = 0; i < length; i++) {
      this.esacsExpanded.push(false);
    }
  }

  private toggleCard(index: number): void {
    this.esacsExpanded[index] = !this.esacsExpanded[index];
  }

  public expandAll(): void {
    this.esacsExpanded.fill(true);
  }

  public closeAll(): void {
    this.esacsExpanded.fill(false);
  }

  private downloadEsac(index: number): void {
    const esac = this.esacs[index];
    let link = document.createElement("a");
    document.body.appendChild(link);
    link.setAttribute('style', 'display: none');
    const content = this.esacToString(esac);
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const fileName = esac.name + '_' + esac.title + '.txt';

    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    link.click();
    window.URL.revokeObjectURL(url);
  }

  private esacToString(esac): string { //typ
    let string = '';
    string += esac.name + '\n';
    string += 'CUT[' + esac.title + ']\n';
    string += 'REG[' + esac.region + ']\n';
    string += 'TRD[' + esac.source + ']\n';
    string += 'SIG[' + esac.signature + ']\n';
    string += 'KEY[' + esac.key + ']\n';
    string += 'MEL[' + esac.melody + ']\n';
    string += 'BEM[' + esac.remarks + ']';

    return string;
  }
}

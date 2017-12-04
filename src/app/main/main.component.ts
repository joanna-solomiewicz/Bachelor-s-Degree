import { Component, OnInit } from '@angular/core';

import { MainService } from './services/main.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private esacs;  //typ

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
      }, error => {
        console.log('GET /esacs error');
      }
    )
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

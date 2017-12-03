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
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'esac-result',
  templateUrl: './esac-result.component.html',
  styleUrls: ['./esac-result.component.scss']
})
export class EsacResultComponent implements OnInit {

  @Input() midi;

  constructor() { }

  ngOnInit() {
  }

}

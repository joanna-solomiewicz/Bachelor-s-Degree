import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'esac-convert-result',
  templateUrl: './esac-convert-result.component.html',
  styleUrls: ['./esac-convert-result.component.scss']
})
export class EsacConvertResultComponent implements OnInit {

  @Input() midis;

  constructor() { }

  ngOnInit() {
  }

}

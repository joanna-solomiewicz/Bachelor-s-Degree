import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'midi-convert-result',
  templateUrl: './midi-convert-result.component.html',
  styleUrls: ['./midi-convert-result.component.scss']
})
export class MidiConvertResultComponent implements OnInit {

  @Input() esac;

  constructor() { }

  ngOnInit() {
  }

}

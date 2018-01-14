import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidiConvertFileComponent } from './midi-convert-file.component';

describe('MidiConvertFileComponent', () => {
  let component: MidiConvertFileComponent;
  let fixture: ComponentFixture<MidiConvertFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidiConvertFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidiConvertFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

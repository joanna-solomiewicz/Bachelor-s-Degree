import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidiConvertResultComponent } from './midi-convert-result.component';

describe('MidiConvertResultComponent', () => {
  let component: MidiConvertResultComponent;
  let fixture: ComponentFixture<MidiConvertResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidiConvertResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidiConvertResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

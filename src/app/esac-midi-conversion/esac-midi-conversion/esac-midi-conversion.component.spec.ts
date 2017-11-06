import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsacMidiConversionComponent } from './esac-midi-conversion.component';

describe('EsacMidiConversionComponent', () => {
  let component: EsacMidiConversionComponent;
  let fixture: ComponentFixture<EsacMidiConversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsacMidiConversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsacMidiConversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

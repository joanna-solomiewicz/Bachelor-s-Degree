import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidiToEsacComponent } from './midi-to-esac.component';

describe('MidiToEsacComponent', () => {
  let component: MidiToEsacComponent;
  let fixture: ComponentFixture<MidiToEsacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidiToEsacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidiToEsacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

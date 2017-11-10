import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsacToMidiComponent } from './esac-to-midi.component';

describe('EsacToMidiComponent', () => {
  let component: EsacToMidiComponent;
  let fixture: ComponentFixture<EsacToMidiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsacToMidiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsacToMidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

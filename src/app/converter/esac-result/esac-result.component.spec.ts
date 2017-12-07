import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsacResultComponent } from './esac-result.component';

describe('EsacResultComponent', () => {
  let component: EsacResultComponent;
  let fixture: ComponentFixture<EsacResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsacResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsacResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

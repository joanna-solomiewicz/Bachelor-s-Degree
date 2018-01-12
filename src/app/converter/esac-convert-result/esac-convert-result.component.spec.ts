import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsacConvertResultComponent } from './esac-convert-result.component';

describe('EsacConvertResultComponent', () => {
  let component: EsacConvertResultComponent;
  let fixture: ComponentFixture<EsacConvertResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsacConvertResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsacConvertResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

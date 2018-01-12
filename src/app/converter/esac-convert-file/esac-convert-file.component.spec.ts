import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsacConvertFileComponent } from './esac-convert-file.component';

describe('EsacConvertFileComponent', () => {
  let component: EsacConvertFileComponent;
  let fixture: ComponentFixture<EsacConvertFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsacConvertFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsacConvertFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

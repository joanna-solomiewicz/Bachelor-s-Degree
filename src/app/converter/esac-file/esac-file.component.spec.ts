import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsacFileComponent } from './esac-file.component';

describe('EsacFileComponent', () => {
  let component: EsacFileComponent;
  let fixture: ComponentFixture<EsacFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsacFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsacFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

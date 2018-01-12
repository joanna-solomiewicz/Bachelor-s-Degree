import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsacAddFileComponent } from './esac-add-file.component';

describe('EsacAddFileComponent', () => {
  let component: EsacAddFileComponent;
  let fixture: ComponentFixture<EsacAddFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsacAddFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsacAddFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

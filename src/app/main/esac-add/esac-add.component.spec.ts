import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsacAddComponent } from './esac-add.component';

describe('EsacAddComponent', () => {
  let component: EsacAddComponent;
  let fixture: ComponentFixture<EsacAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsacAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsacAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

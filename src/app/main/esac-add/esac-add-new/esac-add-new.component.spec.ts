import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsacAddNewComponent } from './esac-add-new.component';

describe('EsacAddNewComponent', () => {
  let component: EsacAddNewComponent;
  let fixture: ComponentFixture<EsacAddNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsacAddNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsacAddNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

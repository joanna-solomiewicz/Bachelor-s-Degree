import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsacNewComponent } from './esac-new.component';

describe('EsacNewComponent', () => {
  let component: EsacNewComponent;
  let fixture: ComponentFixture<EsacNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsacNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsacNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

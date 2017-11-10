import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadEsacFileComponent } from './upload-esac-file.component';

describe('UploadEsacFileComponent', () => {
  let component: UploadEsacFileComponent;
  let fixture: ComponentFixture<UploadEsacFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadEsacFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadEsacFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

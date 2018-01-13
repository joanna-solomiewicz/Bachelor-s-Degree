import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsacDeleteDialogComponent } from './esac-delete-dialog.component';

describe('EsacDeleteDialogComponent', () => {
  let component: EsacDeleteDialogComponent;
  let fixture: ComponentFixture<EsacDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsacDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsacDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

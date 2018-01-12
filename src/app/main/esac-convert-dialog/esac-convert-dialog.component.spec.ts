import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsacConvertDialogComponent } from './esac-convert-dialog.component';

describe('EsacConvertDialogComponent', () => {
  let component: EsacConvertDialogComponent;
  let fixture: ComponentFixture<EsacConvertDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsacConvertDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsacConvertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

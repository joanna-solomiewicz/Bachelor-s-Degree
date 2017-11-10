import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEsacComponent } from './new-esac.component';

describe('NewEsacComponent', () => {
  let component: NewEsacComponent;
  let fixture: ComponentFixture<NewEsacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEsacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEsacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

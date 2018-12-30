import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboCustomersComponent } from './combo-customers.component';

describe('ComboCustomersComponent', () => {
  let component: ComboCustomersComponent;
  let fixture: ComponentFixture<ComboCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

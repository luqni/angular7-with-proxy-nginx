import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTransactionsComponent } from './form-transactions.component';

describe('FormTransactionsComponent', () => {
  let component: FormTransactionsComponent;
  let fixture: ComponentFixture<FormTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

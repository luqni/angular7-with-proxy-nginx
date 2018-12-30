import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransactionsComponent } from './create-transactions.component';

describe('CreateTransactionsComponent', () => {
  let component: CreateTransactionsComponent;
  let fixture: ComponentFixture<CreateTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

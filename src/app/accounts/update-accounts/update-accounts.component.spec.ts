import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAccountsComponent } from './update-accounts.component';

describe('UpdateAccountsComponent', () => {
  let component: UpdateAccountsComponent;
  let fixture: ComponentFixture<UpdateAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

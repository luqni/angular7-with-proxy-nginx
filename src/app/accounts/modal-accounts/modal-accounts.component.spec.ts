import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAccountsComponent } from './modal-accounts.component';

describe('ModalAccountsComponent', () => {
  let component: ModalAccountsComponent;
  let fixture: ComponentFixture<ModalAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

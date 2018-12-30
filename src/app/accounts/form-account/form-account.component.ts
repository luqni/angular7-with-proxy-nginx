import { Component, OnInit, Input, Output } from '@angular/core';
import { Accounts } from '../accounts';
import { EventEmitter } from 'protractor';
import { AccountsService } from '../accounts.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Customers } from 'src/app/customers/customers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-account',
  templateUrl: './form-account.component.html',
  styleUrls: ['./form-account.component.scss']
})
export class FormAccountComponent implements OnInit {
  // @Input()
  
  account:Accounts;

  // @Output()
  // result = new EventEmitter();

  accountsFormGroup:FormGroup;
  customers :Object;
  constructor(private accountService:AccountsService, private formBuilder:FormBuilder, private route : Router) { }

  ngOnInit() {
    this.accountsFormGroup = this.formBuilder.group({
      id:[''],
      opendate:[''],
      balance:[' '],
      customerid:['']
    });
    this.getCustomers();
  } 
  getCustomers(){
    this.accountService.getCustomer().subscribe((response)=>{
      this.customers=response['values'];
      console.log(this.customers);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }
  submitData(){
    let acconts:Accounts = new Accounts();
    acconts.opendate = this.accountsFormGroup.controls['opendate'].value;
    acconts.balance = this.accountsFormGroup.controls['balance'].value;

    let customer = new Customers;
    customer.id = this.accountsFormGroup.controls['customerid'].value;
    acconts.customer = customer;
    
 
    this.accountService.insertAccounts(acconts).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.route.navigate(['/accounts-list']);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  } 
}
import { Component, OnInit } from '@angular/core';
import { Transactions } from '../transactions';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TransactionsService } from '../transactions.service';
import { Router } from '@angular/router';
import { Accounts } from 'src/app/accounts/accounts';

@Component({
  selector: 'app-form-transactions',
  templateUrl: './form-transactions.component.html',
  styleUrls: ['./form-transactions.component.scss']
})
export class FormTransactionsComponent implements OnInit {
 
  transactions:Transactions;
  transactionsFormGroup:FormGroup;

  accounts:Object;
  constructor(private transactionsService:TransactionsService, private formBuilder:FormBuilder, private router : Router) { }

  ngOnInit() {
    this.transactionsFormGroup = this.formBuilder.group({
      id:[''],
      type:[''],
      amount:[' '],
      amountsign:[''],
      accountid:['']
    });
    this.getAccounts();
  }
  getAccounts(){
    this.transactionsService.getListAccounts().subscribe((response)=>{
      this.accounts=response;
      console.log(this.accounts);
    },(err)=>{
      alert('Erorr'+JSON.stringify(err));
    });
  }

  submitData(){
    let transactions:Transactions = new Transactions();
    
    transactions.type = this.transactionsFormGroup.controls['type'].value;
    transactions.amount = this.transactionsFormGroup.controls['amount'].value;
    transactions.amountsign = this.transactionsFormGroup.controls['amountsign'].value;

    let acconts = new Accounts;
    acconts.accountnumber = this.transactionsFormGroup.controls['accountid'].value;
    
    // console.log(this.accountsFormGroup.controls['customerid'].value)
   
    transactions.accountid = acconts;
    // console.log(acconts);
    this.transactionsService.insertTransaction(transactions).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.router.navigate(['/list-transaction']);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }
  setDataToForm(acconts){
    if(acconts){
      this.transactionsFormGroup.controls['id'].setValue(this.transactions.id);
      this.transactionsFormGroup.controls['type'].setValue(this.transactions.type);
      this.transactionsFormGroup.controls['amount'].setValue(this.transactions.amount);
      this.transactionsFormGroup.controls['amountsign'].setValue(this.transactions.amountsign);
    }
  }
  updatedata(){
    this.setDataToForm(this.transactions);
  }

}

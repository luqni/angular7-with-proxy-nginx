import { Component, OnInit } from '@angular/core';
import { Transactions } from '../transactions';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionsService } from '../transactions.service';
import { Accounts } from 'src/app/accounts/accounts';

@Component({
  selector: 'app-create-transactions',
  templateUrl: './create-transactions.component.html',
  styleUrls: ['./create-transactions.component.scss']
})
export class CreateTransactionsComponent implements OnInit {
  
  transactions:Transactions;
  transactionsFormGroup:FormGroup;

  accounts:Object;
  constructor(private transactionsService:TransactionsService, private formBuilder:FormBuilder, private route : Router) { }

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
      this.route.navigate(['/list-transaction']);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }
 

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Accounts } from '../accounts';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-update-accounts',
  templateUrl: './update-accounts.component.html',
  styleUrls: ['./update-accounts.component.scss']
})
export class UpdateAccountsComponent implements OnInit {

  ngOnInit() {
    this.accountsFormGroup = this.formBuilder.group({
      id:[''],
      opendate:['',Validators.required],
      balance:['',Validators.required],
      customerid:['',Validators.required]
    });
    if(this.accounts){
      this.accountsFormGroup.controls['id'].setValue(this.accounts.accountnumber);
      this.accountsFormGroup.controls['opendate'].setValue(this.accounts.opendate);
      this.accountsFormGroup.controls['balance'].setValue(this.accounts.balance);
      this.accountsFormGroup.controls['customerid'].setValue(this.accounts.customer);
    }
    
  }

  @Input()
  accounts:Accounts;

  @Output()
  result = new EventEmitter();

  constructor(private accountsService:AccountsService, private formBuilder:FormBuilder) { }
  accountsFormGroup : FormGroup;
  submitDataInsert(){
   
    let accounts:Accounts = new Accounts();
    accounts.opendate = this.accountsFormGroup.controls['opendate'].value;
    accounts.balance = this.accountsFormGroup.controls['balance'].value;
   

    this.accountsService.insertAccounts(accounts).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
    this.accountsFormGroup.reset();
  }

  cancelChanges(){
    this.result.emit(true);
  }

}

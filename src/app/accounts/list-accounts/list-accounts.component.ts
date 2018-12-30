import { Component, OnInit } from '@angular/core';
import { Accounts } from '../accounts';
import { AccountsService } from '../accounts.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormComponent } from 'src/app/customers/form/form.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.scss']
})

export class ListAccountsComponent implements OnInit {
  listAccounts:Accounts[] = [];
  constructor(private accountService:AccountsService, private formBuilder:FormBuilder, private activatedRoute:ActivatedRoute, private router : Router) { }
  showDetail:boolean = false;
  formAccounts:FormComponent;
  accountsFormGroup:FormGroup;
  accounts:Accounts;
  selectedAccounts:Accounts= new Accounts();
  

  loadData(customers?){
    this.accountService.getList(customers).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.listAccounts=[];
      Object.assign(this.listAccounts, response['values']);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    })
  }
  ngOnInit() {
    
    this.accountsFormGroup = this.formBuilder.group({
      opendate:[''],
      balance:['']
    });
    // this.updatedata();
      this.activatedRoute.params.subscribe(params =>{
      const customers:String=params['customers'];
      this.loadData(customers);
    })
  }

  setDataToForm(accounts){
    if(accounts){
      this.accountsFormGroup.controls['opendate'].setValue(this.accounts.opendate);
      this.accountsFormGroup.controls['balance'].setValue(this.accounts.balance);
    }
  }

  updatedata(){
    this.setDataToForm(this.accounts);
  }
  submitData(id){
    let accounts:Accounts = new Accounts();
    accounts.opendate = this.accountsFormGroup.controls['opendate'].value;
    accounts.balance = this.accountsFormGroup.controls['balance'].value;
    accounts.accountnumber = this.accountsFormGroup.controls['id'].value;
    accounts.customer = this.accountsFormGroup.controls['customerid'].value;
    console.log(accounts);
    this.accountService.updateAccounts(accounts).subscribe((response)=>{
      console.log(JSON.stringify(response));
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
    this.loadData();
  }
  deleteAcc(id){
    if(confirm('Yakin Mau Hapus Aku')){
      this.accountService.deletAccounts(id).subscribe(res=>{
        alert('berhasil');
        this.loadData();
      },err=>{
        alert('gagal')
      })
    }
  }
  selectAccount(accounts:Accounts){
    let copyAccount = new Accounts();
    copyAccount.opendate = accounts.opendate;
    copyAccount.balance = accounts.balance;
    this.selectedAccounts = accounts;
    this.formAccounts.updatedata();

    this.selectedAccounts = accounts;
    this.showDetail=true;
    // this.showDetail1=false;
    this.formAccounts.updatedata();
  }
  prosesResult(result){
    if(result){
      this.showDetail=false;
      this.loadData();
    }
  }
  viewAccount(account:Accounts){
    this.router.navigate([
      '/list-transaction',
      { account:account.accountnumber}
    ]);

  }

}

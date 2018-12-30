import { Component, OnInit } from '@angular/core';
import { Transactions } from '../transactions';
import { TransactionsService } from '../transactions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-transactions',
  templateUrl: './list-transactions.component.html',
  styleUrls: ['./list-transactions.component.scss']
})
export class ListTransactionsComponent implements OnInit {
  listTransaction:Transactions[]=[];

  constructor(private transactionService:TransactionsService, private activatedRoute:ActivatedRoute) { }

  
  loadData(account?){
    this.transactionService.getList(account).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.listTransaction=[];
      // console.log("list"+this.listTransaction);
      Object.assign(this.listTransaction,response['values']); 
    },(err)=>{
      alert('Error : '+JSON.stringify(err));
    });
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
    const account:String=params['account'];
    this.loadData(account);
  })
}
  deletTransactions(id){
    if(confirm('Mau hapus Aku Nich.. :( ?')){
      this.transactionService.deletTransaction(id).subscribe(res=>{
        alert('berhasil');
        this.loadData();
      },err=>{
        alert('gagal kamu nakal');
      });
    }
    
  }
  

}

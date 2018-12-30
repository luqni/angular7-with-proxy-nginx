import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transactions } from './transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private httpClient:HttpClient) { }

  getList(accountid?){
    let params:String = ' ';
    if(accountid){
      params = '?accountid=' + accountid;
    }
    return this.httpClient.get('http://localhost:9000/api/Transaction/list'+params);
  }
  getListAccounts(){
    return this.httpClient.get('http://localhost:8080/Account/accounts');
  }
  insertTransaction(transactions:Transactions){
    return this.httpClient.post('http://localhost:8080/Transaction/post',transactions);
  }
  deletTransaction(transactions:Transactions){
    return this.httpClient.delete('http://localhost:8080/Transaction/transaction/' +transactions.id);
  }
  
  
}

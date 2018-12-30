import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accounts } from './accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private httpClient:HttpClient) { }
  
  getList(customerid?){
    let params:String = ' ';
    if(customerid){
      params = '?customerid=' + customerid;
    }
    return this.httpClient.get('http://localhost:9000/api/Account/list'+params);
  }
  getCustomer(){
    return this.httpClient.get('http://localhost:8080/Customer/list');
  }
  insertAccounts(accounts:Accounts){
    return this.httpClient.post('http://localhost:9000/api/Account/',accounts);
  }
  updateAccounts(accounts:Accounts){
    return this.httpClient.put('http://localhost:9000/Account/',accounts);
  }
  deletAccounts(accounts:Accounts){
    return this.httpClient.delete('http://localhost:9000/api/Account/'+accounts.accountnumber);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  // same autowired in spring dependency injection
  constructor(private httpClient:HttpClient) { }

  getList(){
    return this.httpClient.get('http://localhost:9000/api/Customer/list');
  }

  update(customers:Customers){
    return this.httpClient.put('http://localhost:9000/api/Customer/', customers);
    
  }
  insert(customers:Customers){
    return this.httpClient.post('http://localhost:9000/api/Customer', customers);
  }
  delete(customers:Customers){
    return this.httpClient.delete('http://localhost:9000/api/Customer/'+customers.id);
  }
}

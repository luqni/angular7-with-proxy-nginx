import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customers } from 'src/app/customers/customers';
import { CustomersService } from 'src/app/customers/customers.service';

@Component({
  selector: 'app-combo-customers',
  templateUrl: './combo-customers.component.html',
  styleUrls: ['./combo-customers.component.scss']
})
export class ComboCustomersComponent implements OnInit {
  
  listCustomers:Customers[]=[];

  @Output()
  customers = new EventEmitter<Customers>();

  @Input()
  selectedCustomers:Customers;

  constructor(private customerService:CustomersService) { }

  ngOnInit() {
    this.loadData();
  }
  onChange(index){
    console.log('selected : '+index?JSON.stringify(index):"");
    if(this.listCustomers && this.listCustomers.length > 0){
      this.customers.emit(this.listCustomers[index]);
    }
    
  }
  loadData(){
    this.customerService.getList().subscribe(
      (response)=>{
        console.log(JSON.stringify(response));
        Object.assign(this.listCustomers, response['values']);
      },(err)=>{
        alert('error : '+JSON.stringify(err));
      }
    );
  }

}

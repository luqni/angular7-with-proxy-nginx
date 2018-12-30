import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomersService } from '../customers.service';
import { Customers } from '../customers';
import { FormComponent } from '../form/form.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customerslist',
  templateUrl: './customerslist.component.html',
  styleUrls: ['./customerslist.component.scss']
})
export class CustomerslistComponent implements OnInit {
  listCustomers:Customers[] = [];
  showDetail:boolean = false; //dipakai untuk memunculkan atau menghilangkan detail
  selectedCustomer:Customers = new Customers();
  showDetail1:boolean = false;
  @ViewChild('formCustomer')
  formCustomer:FormComponent; //objek yang wakili di htmlnya
  dtOptions: DataTables.Settings = {};
  // @ViewChild('dataTable') table;
  // dataTable:any;
  constructor(private customersService:CustomersService, private router : Router ) { }
  //method yang pertama kali di jalankan saat page di buka
  ngOnInit():void {
    this.loadData();
  }

  muncul() {
    this.showDetail1=true;
    this.showDetail=false;
  }

    selectCustomers(customers:Customers){
    let copyCustomers = new Customers();
    copyCustomers.id = customers.id;
    copyCustomers.firtsname = customers.firtsname;
    copyCustomers.lastname = customers.lastname;
    copyCustomers.username = customers.username;
    copyCustomers.password = customers.password;
    copyCustomers.phonenumber = customers.phonenumber;
    copyCustomers.phonetype = customers.phonetype;
    copyCustomers.birthdate = customers.birthdate;

    this.selectedCustomer = customers;
    this.showDetail=true;
    this.showDetail1=false;
    this.formCustomer;
  }

  loadData() {
    this.customersService.getList().subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.listCustomers=[];
      Object.assign(this.listCustomers, response['values']);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
  }

  prosesResult(result){
    if(result){
      this.showDetail=false;
      this.loadData();
    }
  }
  prosesResult2(result){
    if(result){
      this.showDetail1=false;
      this.loadData();
    }
  }
  deletCustumors(id){
    if(confirm('Mau hapus Aku Nich.. :( ?')){
      this.customersService.delete(id).subscribe(res=>{
        alert('berhasil');
        this.loadData();
      },err=>{
        alert('gagal kamu nakal');
      });
    }
    
  }
  viewAccount(customers:Customers){
    this.router.navigate([
      '/accounts-list',
      { customers:customers.id}
    ]);

  }

}

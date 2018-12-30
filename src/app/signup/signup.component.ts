import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customers } from '../customers/customers';
import { CustomersService } from '../customers/customers.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  ngOnInit() {
    this.customersFormGroup = this.formBuilder.group({
      id:[''],
      firtsname:['',Validators.required],
      lastname:['',Validators.required],
      birthdate:['',Validators.required],
      username:[''],
      password:[''],
      phonenumber:['',Validators.required],
      phonetype:['',Validators.required]
    });
    if(this.customers){
      this.customersFormGroup.controls['id'].setValue(this.customers.id);
      this.customersFormGroup.controls['firtsname'].setValue(this.customers.firtsname);
      this.customersFormGroup.controls['lastname'].setValue(this.customers.lastname);
      this.customersFormGroup.controls['birthdate'].setValue(this.customers.birthdate);
      this.customersFormGroup.controls['username'].setValue(this.customers.username);
      this.customersFormGroup.controls['password'].setValue(this.customers.password);
      this.customersFormGroup.controls['phonenumber'].setValue(this.customers.phonenumber);
      this.customersFormGroup.controls['phonetype'].setValue(this.customers.phonetype);
    }
    
  }

  @Input()
  customers:Customers;

  @Output()
  result = new EventEmitter();

  constructor(private customersService:CustomersService, private formBuilder:FormBuilder) { }
  customersFormGroup : FormGroup;
  submitDataInsert(){
    let customers:Customers = new Customers();
    customers.id = this.customersFormGroup.controls['id'].value;
    customers.firtsname = this.customersFormGroup.controls['firtsname'].value;
    customers.lastname = this.customersFormGroup.controls['lastname'].value;
    customers.birthdate = this.customersFormGroup.controls['birthdate'].value;
    customers.username = this.customersFormGroup.controls['username'].value;
    customers.password = this.customersFormGroup.controls['password'].value;
    customers.phonenumber = this.customersFormGroup.controls['phonenumber'].value;
    customers.phonetype = this.customersFormGroup.controls['phonetype'].value;

    this.customersService.insert(customers).subscribe((response)=>{
      console.log(JSON.stringify(response));
      this.result.emit(true);
    },(err)=>{
      alert('error : '+JSON.stringify(err));
    });
    this.customersFormGroup.reset();

    location.reload();
    
  }

  cancelChanges(){
    this.result.emit(true);
  }
}


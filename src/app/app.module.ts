import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CustomersComponent } from './customers/customers.component';
import { AccountsComponent } from './accounts/accounts.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerslistComponent } from './customers/customerslist/customerslist.component';
import { CustomersService } from './customers/customers.service';
import { FormComponent } from './customers/form/form.component';
import { FormAccountComponent } from './accounts/form-account/form-account.component';
import { EnigmaPipe } from './shared/enigma.pipe';
import { ListAccountsComponent } from './accounts/list-accounts/list-accounts.component';
import { ModalAccountsComponent } from './accounts/modal-accounts/modal-accounts.component';
import { UpdateAccountsComponent } from './accounts/update-accounts/update-accounts.component';
import { ListTransactionsComponent } from './transactions/list-transactions/list-transactions.component';
import { CreateTransactionsComponent } from './transactions/create-transactions/create-transactions.component';
import { FormTransactionsComponent } from './transactions/form/form-transactions.component';
import { ComboCustomersComponent } from './shared/customers/combo-customers/combo-customers.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './shared/footer/footer.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CustomersComponent,
    AccountsComponent,
    TransactionsComponent,
    SignupComponent,
    HomeComponent,
    SigninComponent,
    CreateaccountComponent,
    CustomerslistComponent,
    FormComponent,
    FormAccountComponent,
    EnigmaPipe,
    ListAccountsComponent,
    ModalAccountsComponent,
    UpdateAccountsComponent,
    ListTransactionsComponent,
    CreateTransactionsComponent,
    FormTransactionsComponent,
    ComboCustomersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    DataTablesModule

  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

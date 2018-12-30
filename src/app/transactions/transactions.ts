import { Accounts } from '../accounts/accounts';

export class Transactions{
    id:number;
    type:string;
    amount:number;
    amountsign:string;
    accountid:Accounts;
}
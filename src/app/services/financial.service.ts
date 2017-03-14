import {Injectable} from '@angular/core';
import { Expenses } from '../domain/expenses.domain';

@Injectable()
export class FinancialService{

    idAccount:String;
    expenses: Array<Expenses>;

    constructor(){
        this.idAccount = "";
        this.expenses = new Array<Expenses>();
    }

    setIdAccount( idAccount: String ){
        this.idAccount = idAccount;
    }

    getIdAccount(){
        return this.idAccount;
    }

    addExpense( detail:String, value:number ){
        let expense : Expenses = new Expenses();
        expense.id = this.getNextIndex();
        expense.detail = detail;
        expense.value = value;
        this.expenses.push( expense );
    }

    editExpense(id:number, detail:String, value:number){
        for( let element of this.expenses ){
            if( id === element.id ){
                element.detail = detail;
                element.value = value;
            }
        }
        return this.expenses;
    }

    removeExpense( idExpense:number ){
        let index = 0;
        for( let element of this.expenses ){
            if( idExpense === element.id ){
                this.expenses.splice(index, 1);
            }
            index++;
        }
        return this.expenses;
    }

    getNextIndex(){
        if( this.expenses.length == 0 ){
            return 0;
        }
        return this.expenses[this.expenses.length-1].id + 1;
    }

}
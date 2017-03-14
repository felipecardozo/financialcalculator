import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinancialService } from '../../app/services/financial.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'expenses',
  templateUrl: 'expenses.html'
})
export class ExpensesPage {

  idAccount:any;
  sumExpenses: number;
  expenses: any;

  constructor(public navCtrl: NavController, private financialService:FinancialService, public alertCtrl: AlertController) {
    console.log(financialService.getIdAccount());
    this.sumExpenses = 0;
    this.expenses = this.financialService.expenses;
  }

  ngOnInit(){
    this.financialService.addExpense( "detail 1", 100.45);
    this.financialService.addExpense( "detail 2", 200.45);
    this.financialService.addExpense( "detail 3", 300.45);
    this.getSum();
  }

  getSum(){
    this.sumExpenses = 0;
    for( let expense of this.financialService.expenses ){
      this.sumExpenses += expense.value;
    }
    this.sumExpenses = this.formatValue(this.sumExpenses);
    return this.sumExpenses;
  }

  addExpense( detail:String, value:number ){
    this.financialService.addExpense( detail, this.formatValue(value));
    this.sumExpenses += this.formatValue(value);
  }

  editExpense( id:number, detail:String, value:number ){
    this.financialService.editExpense(id, detail, value);
    this.getSum();
  }

  removeExpense(id:number){
    this.financialService.removeExpense(id);
    this.getSum();
  }

  showPromptAddExpense() {
    let prompt = this.alertCtrl.create({
      title: 'Add Expense',
      message: "Enter the detail and then the value (number only accepted)",
      inputs: [
        {
          name: 'detail',
          placeholder: 'Detail'
        },
        {
          name: 'value',
          placeholder: 'Value'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.addExpense(data.detail, this.formatValue(data.value));
          }
        }
      ]
    });
    prompt.present();
  }

  showPromptEditExpense(expense:any) {
    let prompt = this.alertCtrl.create({
      title: 'Edit Expense',
      message: "Edit the detail and/or the value (number only accepted)",
      inputs: [
        {
          name: 'detail',
          value: expense.detail,
          placeholder: 'Detail'
        },
        {
          name: 'value',
          value: expense.value,
          placeholder: 'Value'
        },
      ],
      buttons: [
        {
          text: 'Eliminar',
          handler: data => {
            this.removeExpense( expense.id );
          }
        },{
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Edit',
          handler: data => {
            this.editExpense( expense.id, data.detail, this.formatValue(data.value));
          }
        }
      ]
    });
    prompt.present();
  }

  formatValue( value:number ){
    return parseFloat((Math.round(value * 100) / 100).toFixed(2));
  }

}

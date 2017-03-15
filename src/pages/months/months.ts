import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinancialService } from '../../app/services/financial.service';
import { AlertController } from 'ionic-angular';
import { ExpensesPage } from '../expenses/expenses';

@Component({
  selector: 'months',
  templateUrl: 'months.html'
})
export class MonthsPage {

  items:Array<String>;
  year:number;
  month:String;

  constructor(public navCtrl: NavController, private financialService: FinancialService) {
    this.items = new Array<String>();
    this.items.push("January");
    this.items.push("February");
    this.items.push("March");
    this.items.push("April");
    this.items.push("May");
    this.items.push("June");
    this.items.push("July");
    this.items.push("August");
    this.items.push("September");
    this.items.push("October");
    this.items.push("November");
    this.items.push("December");
    let date = new Date();
    this.year = date.getFullYear();
    this.month = this.items[date.getMonth()];
  }

  itemSelected(item:any){
    this.financialService.currentMonth = item;
    this.navCtrl.push( ExpensesPage );
  }

  
}

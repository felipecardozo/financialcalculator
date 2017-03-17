import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinancialService } from '../../app/services/financial.service';
import { Util } from '../../app/util/util';
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
    this.items = Util.months;
    this.year = Util.getCurrentYear();
    this.month = Util.getCurrentMonthString();
  }

  itemSelected(item:any){
    this.financialService.currentMonth = item;
    this.navCtrl.push( ExpensesPage );
  }

  
}

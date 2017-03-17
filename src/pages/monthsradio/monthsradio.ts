import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FinancialService } from '../../app/services/financial.service';
import { ResumePage } from '../resume/resume';
import { Util } from '../../app/util/util';

@Component({
  selector: 'monthsradio',
  templateUrl: 'monthsradio.html'
})
export class MonthsRadioPage {

  items:Array<String>;
  year:number;
  month:String;

  constructor(public navCtrl: NavController, public navParams:NavParams, private financialService: FinancialService) {
    this.items = Util.months;
    if( navParams.get("month") ){
      this.month = navParams.get("month");
      console.log(this.month);
    }
  }

  itemSelected(item:any){
    this.financialService.currentMonth = item;
    this.navCtrl.push(ResumePage);
  }

  
}

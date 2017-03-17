import { Component, ViewChild } from '@angular/core';
import { FinancialService } from '../../app/services/financial.service';
import { NavController } from 'ionic-angular';
import { MonthsRadioPage } from '../monthsradio/monthsradio';
import { Util } from '../../app/util/util';

@Component({
  selector: 'resume',
  templateUrl: 'resume.html'
})
export class ResumePage {

  @ViewChild('myNav') nav: NavController;
  month: String;
  rootPage: any = ResumePage;
  item :any;

  constructor(public navCtrl: NavController, private financialService: FinancialService) {
    if( this.financialService.currentMonth ){
      this.month = this.financialService.currentMonth;
    }else {
      let date = new Date();
      this.month = Util.months[date.getMonth()];
    }
    
  }

  pushPage() {
    this.navCtrl.push(MonthsRadioPage, {
      month: this.financialService.currentMonth
    });
  }

}

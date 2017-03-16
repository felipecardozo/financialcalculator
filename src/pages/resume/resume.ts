import { Component, ViewChild } from '@angular/core';
import { FinancialService } from '../../app/services/financial.service';
import { NavController } from 'ionic-angular';
import { MonthsPage } from '../months/months';

@Component({
  selector: 'resume',
  templateUrl: 'resume.html'
})
export class ResumePage {

  @ViewChild('myNav') nav: NavController;
  month:String;
  rootPage: any = ResumePage;

  constructor(public navCtrl: NavController, private financialService:FinancialService) {
    
  }

  pushPage(){
    // push another page on to the navigation stack
    // causing the nav controller to transition to the new page
    // optional data can also be passed to the pushed page.
    this.navCtrl.push(MonthsPage, {
      month: this.financialService.currentMonth
    });
  }

}

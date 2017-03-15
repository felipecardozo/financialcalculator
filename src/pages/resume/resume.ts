import { Component } from '@angular/core';
import { FinancialService } from '../../app/services/financial.service';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'resume',
  templateUrl: 'resume.html'
})
export class ResumePage {

  constructor(public navCtrl: NavController, private financialService:FinancialService) {

  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExpensesPage } from '../expenses/expenses';
import { FinancialService } from '../../app/services/financial.service';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  idAccount:any;

  constructor(public navCtrl: NavController, private financialService:FinancialService, public alerCtrl: AlertController) {

  }

  goToExpenses(){
    if( this.idAccount == "" || this.idAccount == undefined ){
        let alert = this.alerCtrl.create({
          title: 'New Account is required!',
          message: 'Please provide an account name, This will be your financial account in this device!',
          buttons: ['Ok']
        });
        alert.present();
    }else{
      this.financialService.setIdAccount(this.idAccount);
      this.navCtrl.push( ExpensesPage );
    }
    
  }

}

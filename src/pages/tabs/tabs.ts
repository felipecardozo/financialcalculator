import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';
import { ResumePage } from '../resume/resume';
import { MonthsPage } from '../months/months';
 
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = MonthsPage;
  tab3Root: any = ResumePage;
  tab4Root: any = ContactPage;

  constructor() {

  }
}

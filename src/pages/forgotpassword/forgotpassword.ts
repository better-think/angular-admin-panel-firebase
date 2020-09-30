import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html'
})
export class ForgotpasswordPage {

  constructor(public navCtrl: NavController) {

  } 
 tabs(){
    this.navCtrl.push(TabsPage);
    }


}

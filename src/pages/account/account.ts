import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ManageaddressPage } from '../manageaddress/manageaddress';
import { ContactPage } from '../contact/contact';
import { PrivacyPage } from '../privacy/privacy';
import { AboutPage } from '../about/about';
import { FaqsPage } from '../faqs/faqs';
import { SigninPage } from '../signin/signin';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public navCtrl: NavController) {

  } 
 manageaddress(){
   this.navCtrl.push(ManageaddressPage);
   }
   contact(){
   this.navCtrl.push(ContactPage);
   }
   privacy(){
   this.navCtrl.push(PrivacyPage);
   }
   about(){
   this.navCtrl.push(AboutPage);
   }    
   faqs(){
   this.navCtrl.push(FaqsPage);
   }
   signin(){
   this.navCtrl.push(SigninPage);
   }

}

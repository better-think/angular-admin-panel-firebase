import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { BookingPage } from '../booking/booking';
@Component({
  selector: 'page-requests',
  templateUrl: 'requests.html'
})
export class RequestsPage {
  requests: string = "pending";
  constructor(public navCtrl: NavController) {

  } 
 booking(){
    this.navCtrl.push(BookingPage);
    }

}

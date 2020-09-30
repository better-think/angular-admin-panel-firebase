import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { PlumberprofilePage } from '../plumberprofile/plumberprofile';
@Component({
  selector: 'page-listofplumber',
  templateUrl: 'listofplumber.html'
})
export class ListofplumberPage {
 gaming: string = "nes";
  constructor(public navCtrl: NavController) {

  } 
 plumberprofile(){
    this.navCtrl.push(PlumberprofilePage);
    }


}

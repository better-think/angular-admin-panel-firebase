import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { BooknowPage } from '../booknow/booknow';
 import { ChatscreenPage } from '../chatscreen/chatscreen';
@Component({
  selector: 'page-plumberprofile',
  templateUrl: 'plumberprofile.html'
})
export class PlumberprofilePage {
plumber: string = "about";
  constructor(public navCtrl: NavController) {

  } 
    booknow(){
    this.navCtrl.push(BooknowPage);
    }
    chatscreen(){
    this.navCtrl.push(ChatscreenPage);
    }


}

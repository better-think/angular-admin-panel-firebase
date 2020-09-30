import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { ChatscreenPage } from '../chatscreen/chatscreen';
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  constructor(public navCtrl: NavController) {

  } 
 chatscreen(){
    this.navCtrl.push(ChatscreenPage);
    }


}

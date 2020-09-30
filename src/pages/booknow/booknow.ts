import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-booknow',
  templateUrl: 'booknow.html'
})
export class BooknowPage {
gaming: string = "nes";
where: string = "nes";
  constructor(public navCtrl: NavController) {

  } 
}

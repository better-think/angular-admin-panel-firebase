import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CategoryPage } from '../category/category';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
city: string = "Mumbai";
  constructor(public navCtrl: NavController) {

  } 
category(){
   this.navCtrl.push(CategoryPage);
   }


}

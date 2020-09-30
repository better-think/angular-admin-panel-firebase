import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { ListofplumberPage } from '../listofplumber/listofplumber';
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  constructor(public navCtrl: NavController) {

  } 
 listofplumber(){
   this.navCtrl.push(ListofplumberPage);
   }


}

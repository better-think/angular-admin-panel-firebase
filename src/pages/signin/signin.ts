import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import * as firebase from 'Firebase';
import { TabsPage } from '../tabs/tabs';
import 'firebase/firestore';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  email:string;
  password:string;
  constructor(public navCtrl: NavController) {
  } 
  continue(){
    const firestore = firebase.firestore();
    const settings = {/* your settings... */ timestampsInSnapshots: true};
    firestore.settings(settings);
    if(this.email == undefined && this.password == undefined){
      alert("Please try again.")
      this.navCtrl.push(SigninPage);
    }else{
      firebase.firestore().collection('users').where('email', '==', this.email).where('password','==',this.password)
      .get().then((snapshot) => {
        if(snapshot.empty){
          alert("Please try again.")
          this.navCtrl.push(SigninPage);
        }else{
          snapshot.forEach((item) => {
            this.navCtrl.push(TabsPage);
          })
        }
      });
    }
  }
  signup(){
    this.navCtrl.push(SignupPage);
  }
}

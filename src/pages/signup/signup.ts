import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

 import { TabsPage } from '../tabs/tabs';
 import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(public navCtrl: NavController) {

  } 
  requestSignup(){
    this.navCtrl.push(TabsPage);
  }
  forgotpassword(){
    this.navCtrl.push(ForgotpasswordPage);
  }


}
// import { Component } from '@angular/core';
// import { NavController } from 'ionic-angular';
// import { AngularFireAuth } from 'firebase/auth';
// import {  } from 'firebase/';
//  import { TabsPage } from '../tabs/tabs';
//  import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
// @Component({
//   selector: 'page-signup',
//   templateUrl: 'signup.html'
// })
// export class SignupPage {
//   password: any;
//   name: any;
//   email:any;
//   phone:number;
//   constructor(public navCtrl: NavController,public auth: AngularFireAuth) {

//   } 
//   requestSignup () {
//     this.auth
//     if(this.name != undefined || this.password != undefined){
//       return this.auth.createUserWithEmailAndPassword(this.name, this.password)
//       .then((result) => {
//         this.tabs();
//       });
//     } else{
//       alert("please try again");
//     }
//   }
//   tabs(){
//     this.navCtrl.push(TabsPage);
//   }
//   forgotpassword(){
//     this.navCtrl.push(ForgotpasswordPage);
//   }


// }

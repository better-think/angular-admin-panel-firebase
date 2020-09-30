import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SigninPage } from '../pages/signin/signin';
import { AboutPage } from '../pages/about/about';
import { AccountPage } from '../pages/account/account';
import { ChatPage } from '../pages/chat/chat';
import { BookingPage } from '../pages/booking/booking';
import { BooknowPage } from '../pages/booknow/booknow';
import { CategoryPage } from '../pages/category/category';
import { ContactPage } from '../pages/contact/contact';
import { ChatscreenPage } from '../pages/chatscreen/chatscreen';

import { FaqsPage } from '../pages/faqs/faqs';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ListofplumberPage } from '../pages/listofplumber/listofplumber';
import { ManageaddressPage } from '../pages/manageaddress/manageaddress';
import { NotificatinonsPage } from '../pages/notificatinons/notificatinons';
import { PlumberprofilePage } from '../pages/plumberprofile/plumberprofile';
import { PrivacyPage } from '../pages/privacy/privacy';
import { RequestsPage } from '../pages/requests/requests';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    AboutPage,
    AccountPage,
    ChatPage,
    TabsPage,
    BookingPage,
    BooknowPage,
    CategoryPage,
    ContactPage,
    ChatscreenPage,
    FaqsPage,
    ForgotpasswordPage,
    ListofplumberPage,
    ManageaddressPage,
    NotificatinonsPage,
    PlumberprofilePage,
    PrivacyPage,
    RequestsPage,
    SigninPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    AboutPage,
    AccountPage,
    ChatPage,
    TabsPage,
    BookingPage,
    BooknowPage,
    CategoryPage,
    ContactPage,
    ChatscreenPage,
    FaqsPage,
    ForgotpasswordPage,
    ListofplumberPage,
    ManageaddressPage,
    NotificatinonsPage,
    PlumberprofilePage,
    PrivacyPage,
    RequestsPage,
    SigninPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

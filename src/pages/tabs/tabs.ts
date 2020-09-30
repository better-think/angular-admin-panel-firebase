import { Component } from '@angular/core';

import { RequestsPage } from '../requests/requests';
import { NotificatinonsPage } from '../notificatinons/notificatinons';
import { HomePage } from '../home/home';
import { AccountPage } from '../account/account';
import { ChatPage } from '../chat/chat';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RequestsPage;
  tab2Root = NotificatinonsPage;
  tab3Root = HomePage;
  tab4Root = AccountPage;
  tab5Root = ChatPage;

  constructor() {

  }
}

import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ChatPage } from '../chat/chat';
import { ContributePage } from '../contribute/contribute';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContributePage;
  tab3Root = ChatPage;
  tab4Root = ContactPage;
  tab5Root = AboutPage;

  constructor() {

  }
}
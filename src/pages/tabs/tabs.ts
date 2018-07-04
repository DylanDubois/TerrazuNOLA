import { Component } from '@angular/core';

import { MenuPage } from '../menu/menu';
import { CateringPage } from '../catering/catering';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MenuPage;
  tab3Root = CateringPage;

  constructor() {

  }
}

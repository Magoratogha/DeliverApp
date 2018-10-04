import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AjustesPage } from '../ajustes/ajustes';
import { PerfilPage } from '../perfil/perfil';
import { DiligenciasPage } from '../diligencias/diligencias';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  params:any;

  constructor(navParams: NavParams) {
    this.params = navParams.data;
    this.tab1 = HomePage;
    this.tab2 = PerfilPage;
    this.tab3 = DiligenciasPage;
    this.tab4 = AjustesPage;
  }
}

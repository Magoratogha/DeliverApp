import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {

  constructor(private app:App, public navCtrl: NavController, public navParams: NavParams) {
  }

  Salir(){
    this.app.getRootNav().setRoot(PrincipalPage);
  }

}

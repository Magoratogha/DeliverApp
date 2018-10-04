import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrarUsuarioNormalPage } from '../registrar-usuario-normal/registrar-usuario-normal';
import { RegistrarUsuarioDomicilioPage } from '../registrar-usuario-domicilio/registrar-usuario-domicilio';

@Component({
  selector: 'page-registrar-tipo',
  templateUrl: 'registrar-tipo.html',
})
export class RegistrarTipoPage {

  normal:any = RegistrarUsuarioNormalPage;
  domicilio:any = RegistrarUsuarioDomicilioPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarTipoPage');
  }

}

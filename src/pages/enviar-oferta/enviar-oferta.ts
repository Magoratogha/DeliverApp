import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-enviar-oferta',
  templateUrl: 'enviar-oferta.html',
})
export class EnviarOfertaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl: ViewController) {
  }

  Enviar(){
    let data = true
    this.viewCtrl.dismiss(data);
  }

  Cancelar(){
    this.viewCtrl.dismiss();
  }

}

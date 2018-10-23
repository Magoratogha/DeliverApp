import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-pqrs',
  templateUrl: 'pqrs.html',
})
export class PqrsPage {

  diligencia:any;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  Enviar(){
    let data = {
      nombre:"Información de modal",
      dato:"Hola soy un modal :y"
    }
    this.viewCtrl.dismiss(data);
  }

  Cancelar(){
    this.viewCtrl.dismiss();
  }

}

import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-pqrs',
  templateUrl: 'pqrs.html',
})
export class PqrsPage {

  tipo:any;
  texto:any;

  constructor(public toastCtrl: ToastController, public viewCtrl: ViewController, public navParams: NavParams) {
  }

  Enviar(){
    if(this.texto && this.tipo) {
      this.viewCtrl.dismiss();
      this.toastCtrl.create({
        message: 'Gracias por tu mensaje c:',
        duration: 3000
      }).present();
    }
    else{
      this.toastCtrl.create({
        message: 'Todos los campos son obligatorios!',
        duration: 3000
      }).present();
    }
  }

  Cancelar(){
    this.viewCtrl.dismiss();
  }

}

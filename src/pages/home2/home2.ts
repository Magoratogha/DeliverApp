import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { PqrsPage } from '../pqrs/pqrs';

@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {

  dataUs:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.dataUs = this.navParams.get("data");

  }

  IrMapa(){
    this.navCtrl.parent.select(2);
  }

  IrPerfil(){
    this.navCtrl.parent.select(1);
  }

  IrHistorial(){
    this.navCtrl.parent.select(2);
  }

  contacto(){
    let modal = this.modalCtrl.create(PqrsPage, {nombre:"Suite modal", compositor:"Hector Fabio Torres Cardona"});
    modal.present();
    modal.onDidDismiss(parametros => {
      if(parametros){
        console.log("El modal trajo esta info:")
        console.log(parametros);
      }
      else{
        console.log("El modal se cerró sin parámetros")
      }
    });
  }
}

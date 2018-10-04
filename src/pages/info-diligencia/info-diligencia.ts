import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { EnviarOfertaPage } from '../enviar-oferta/enviar-oferta';

@Component({
  selector: 'page-info-diligencia',
  templateUrl: 'info-diligencia.html',
})
export class InfoDiligenciaPage {

  nombre:string;
  pago:number;
  tipo:string;
  descripcion:string;
  telefono:number;
  email:string;

  constructor(public navCtrl: NavController, private modalCtrl:ModalController, public navParams: NavParams, private viewCtrl: ViewController) {
    this.nombre = this.navParams.get("name");
    this.telefono = this.navParams.get("tel");
    this.tipo = this.navParams.get("tipo");
    this.pago = this.navParams.get("pago");
    this.email = this.navParams.get("email");
    this.descripcion = this.navParams.get("descripcion");

  }

  EnviarOferta(){
    let modal = this.modalCtrl.create(EnviarOfertaPage, {});
    modal.present();
    modal.onDidDismiss(parametros => {
      if(parametros){
        this.viewCtrl.dismiss();
      }
      else{
        console.log("El modal se cerró sin parámetros")
      }
    });
  }

  Cancelar(){
    this.viewCtrl.dismiss();
  }

}

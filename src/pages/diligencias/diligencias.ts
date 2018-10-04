import { Component } from '@angular/core';
import { IonicPage, NavParams, NavController, ModalController } from 'ionic-angular';
import { CrearDiligenciaPage } from '../crear-diligencia/crear-diligencia';

@Component({
  selector: 'page-diligencias',
  templateUrl: 'diligencias.html',
})
export class DiligenciasPage {

  dataUs:any;

  constructor(private navParams: NavParams, public navCtrl: NavController, private modalCtrl: ModalController) {
    this.dataUs = this.navParams.get("data");
  }

  Nuevo(){
    let modal = this.modalCtrl.create(CrearDiligenciaPage, {"data": this.dataUs});
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

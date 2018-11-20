import { Component } from '@angular/core';
import { NavParams, NavController, ModalController } from 'ionic-angular';
import { CrearDiligenciaPage } from '../crear-diligencia/crear-diligencia';
import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'page-diligencias',
  templateUrl: 'diligencias.html',
})
export class DiligenciasPage {

  dataUs:any;
  domicilios:any[];

  constructor(private storage: StorageProvider, private navParams: NavParams, public navCtrl: NavController, private modalCtrl: ModalController) {
    this.dataUs = this.storage.data.user;
    this.domicilios = this.storage.data.domicilios; 
  }

  Nuevo(){
    let modal = this.modalCtrl.create(CrearDiligenciaPage, {"data": this.dataUs});
    modal.present();
    modal.onDidDismiss(parametros => {
      if(parametros){
        this.storage.SetDomicilios(parametros);
      }
      else{
        console.log("El modal se cerró sin parámetros")
      }
    });
  }

}

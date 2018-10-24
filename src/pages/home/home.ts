import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { CrearDiligenciaPage } from '../crear-diligencia/crear-diligencia';
import { PqrsPage } from '../pqrs/pqrs';
import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dataUs:any;

  constructor(private storage: StorageProvider, private navParams: NavParams, public navCtrl: NavController, private modalCtrl: ModalController) {
    this.dataUs = this.storage.data.user;
  }

  crear(){
    let modal = this.modalCtrl.create(CrearDiligenciaPage);
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

  perfil(){
    this.navCtrl.parent.select(1);
  }

  listadiligencias(){
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

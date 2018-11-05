import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { PqrsPage } from '../pqrs/pqrs';
import { StorageProvider } from '../../providers/storage/storage';
import { SuperTabsController } from 'ionic2-super-tabs';


@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {

  dataUs:any;

  constructor(private storage: StorageProvider, private superTabsCtrl: SuperTabsController, private modalCtrl: ModalController) {
    this.dataUs = this.storage.data.user;
  }

  IrMapa(){
    this.superTabsCtrl.slideTo(3);
  }

  IrPerfil(){
    this.superTabsCtrl.slideTo(1);
  }

  IrHistorial(){
    this.superTabsCtrl.slideTo(2);
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

import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { CrearDiligenciaPage } from '../crear-diligencia/crear-diligencia';
import { PqrsPage } from '../pqrs/pqrs';
import { StorageProvider } from '../../providers/storage/storage';
import { SuperTabsController } from 'ionic2-super-tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dataUs:any;

  constructor(private storage: StorageProvider, private superTabsCtrl: SuperTabsController, private modalCtrl: ModalController) {
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
    this.superTabsCtrl.slideTo(1);
  }

  listadiligencias(){
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

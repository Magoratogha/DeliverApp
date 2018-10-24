import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { EditarPerfilPage } from '../editar-perfil/editar-perfil';
import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  dataUs:any;

  constructor(private storage: StorageProvider, private modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
    this.dataUs = this.storage.data.user; 
  }

  Editar(){
    let modal = this.modalCtrl.create(EditarPerfilPage, {nombre:"Suite modal", compositor:"Hector Fabio Torres Cardona"});
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

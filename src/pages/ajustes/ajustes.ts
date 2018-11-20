import { Component } from '@angular/core';
import { NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { StorageProvider } from "../../providers/storage/storage";

@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {
  
  dataUs:any; 

  constructor(private loadingCtrl: LoadingController, private storage: StorageProvider, private app:App, public navCtrl: NavController, public navParams: NavParams) {
    this.dataUs = this.storage.data.user;  
  }

  Salir(){
    let loader = this.loadingCtrl.create({
      content: "Espera...",
    });
    loader.present();
    this.storage.SetLog(false).then(() => {
      this.storage.RemoveUserData().then(() => {
        this.storage.RemoveDomicilios().then(() => {
          loader.dismiss();
          this.app.getRootNav().setRoot(PrincipalPage);
        });
      });
    });
  }
}

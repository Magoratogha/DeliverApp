import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from "../../providers/storage/storage";

@Component({
  selector: 'page-historial-domicilio',
  templateUrl: 'historial-domicilio.html',
})
export class HistorialDomicilioPage {

  dataUs:any;

  constructor(private storage: StorageProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.dataUs = this.storage.data.user; 
  }

}

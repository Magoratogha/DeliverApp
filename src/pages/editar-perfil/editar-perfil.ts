import { Component } from '@angular/core';
import { ViewController, NavParams, ToastController } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {

  dataUs:any;
  name:any;
  email:any;
  numero:any;

  constructor(private toastCtrl: ToastController, private storage: StorageProvider, public viewCtrl: ViewController, public navParams: NavParams) {
    this.dataUs = this.storage.data.user;
  }

  GuardarCambios(){
    if(this.name && this.email && this.numero){
      this.dataUs["user"]["full_name"] = this.name;
      this.dataUs["user"]["email"] = this.email;  
      this.dataUs["user"]["cellphone"] = this.numero;
      this.storage.SetData(this.dataUs).then(() => {
        this.viewCtrl.dismiss();
      });
    }
    else {
      this.toastCtrl.create({
        message: 'Todos los campos son obligatorios!',
        duration: 3000
      }).present();
    }
  }

  Cancelar(){
    this.viewCtrl.dismiss();
  }

}

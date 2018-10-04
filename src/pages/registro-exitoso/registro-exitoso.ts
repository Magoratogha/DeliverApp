import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-registro-exitoso',
  templateUrl: 'registro-exitoso.html',
})
export class RegistroExitosoPage {

  Usuario:any = {};
  terminos:boolean = false;

  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.Usuario = this.navParams.get("data");
  }

  irRoot(){
    this.navCtrl.popToRoot();
  }

  registrar(){
    if (this.terminos) {
      if(this.Usuario.user_type == 'CL'){
        this.restProvider.addUser(this.Usuario, "Customer");
      }
      else{
        this.restProvider.addUser(this.Usuario, "Delivery");
      }
      this.navCtrl.popToRoot();
      this.toastCtrl.create({
        message: 'Usuario creado con exito!',
        duration: 3000
      }).present();
    }
    else {
      this.toastCtrl.create({
        message: 'Debes aceptar los TyC',
        duration: 3000
      }).present();
    }
  }
}

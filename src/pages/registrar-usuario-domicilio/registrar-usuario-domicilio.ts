import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistroExitosoPage } from "../registro-exitoso/registro-exitoso";
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-registrar-usuario-domicilio',
  templateUrl: 'registrar-usuario-domicilio.html',
})
export class RegistrarUsuarioDomicilioPage {

    exito:any = RegistroExitosoPage;

    first_name:string;
    last_name:string;
    document_number:string;
    document_type:string;
    user_type:string;
    email:string;
    cellphone:string;
    username:string;
    password1:string;
    password2:string;

  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.first_name = "";
    this.last_name = "";
    this.document_number = "";
    this.document_type = "";
    this.user_type = "RE";
    this.email = "";
    this.cellphone = "";
    this.username = "";
    this.password1 = "";
    this.password2 = "";
  }

  irRoot(){
    this.navCtrl.popToRoot();
  }

  Ir(){

    if(this.first_name == "" ||
      this.last_name == "" ||
      this.document_number == "" ||
      this.document_type == "" ||
      this.email == "" ||
      this.cellphone == "" ||
      this.username == "" ||
      this.password1 == "" ||
      this.password2 == ""){
        this.toastCtrl.create({
          message: 'Todos los campos son obligatorios!',
          duration: 3000
        }).present();
    }
    else{
      if(this.password1 != this.password2){
        this.toastCtrl.create({
          message: 'Las contraseñas no coinciden!',
          duration: 3000
        }).present();
      }
      else{
        let regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regexp.test(this.email)){
          this.toastCtrl.create({
            message: 'Ingresa una dirección de correo valida!',
            duration: 3000
          }).present();
        }
        else{
          let regexp = /^[^0-9]\w+$/;
          if(!regexp.test(this.username)){
            this.toastCtrl.create({
              message: 'Tu nickname no debe contener caracteres especiales ni comenzar con números.',
              duration: 3000
            }).present();
          }
          else {
            let data = {
              'cellphone': this.cellphone,
              'document_number': this.document_number,
              'document_type': this.document_type,
              'user_type': this.user_type,
              'user': {
                'username': this.username,
                'password': this.password1,
                'first_name': this.first_name,
                'last_name': this.last_name,
                'email': this.email
              }
            };
  
            this.navCtrl.push(RegistroExitosoPage, {'data': data});
          }
        }
      }
    }
  }
}

import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  GuardarCambios(){
    let data = {
      nombre:"Información de modal",
      dato:"Hola soy un modal :y"
    }
    this.viewCtrl.dismiss(data);
  }

  Cancelar(){
    this.viewCtrl.dismiss();
  }

}

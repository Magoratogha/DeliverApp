import { Component } from '@angular/core';
import { ViewController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { ModalMapaPage } from '../modal-mapa/modal-mapa';
import { RestProvider } from '../../providers/rest/rest';
import { StorageProvider } from "../../providers/storage/storage";

@Component({
  selector: 'page-crear-diligencia',
  templateUrl: 'crear-diligencia.html',
})
export class CrearDiligenciaPage {

  dataUs:any;
  ubicacion:any;
  tipo:any;
  pago:any;
  descripcion:any;

  constructor(private storage: StorageProvider, private toastCtrl: ToastController, private http: RestProvider, public viewCtrl: ViewController, private modalCtrl: ModalController, public navParams: NavParams) {
    this.dataUs = this.storage.data.user;  
  }

  Crear(){
    if(this.tipo && this.pago && this.dataUs.user.user_id && this.descripcion && this.ubicacion) {
      let data = {
        "type": this.tipo,
        "willing_pay": this.pago,
        "customer": this.dataUs.user.user_id,
        "description": this.descripcion,
        "latitud": this.ubicacion.lat,
        "longitud": this.ubicacion.lng
      }
      this.http.CrearDiligencia(data, this.dataUs.token);
      this.viewCtrl.dismiss(data);
      this.toastCtrl.create({
        message: 'Diligencia creada con exito!',
        duration: 3000
      }).present();
    }
    else{
      this.toastCtrl.create({
        message: 'Todos los campos son obligatorios!',
        duration: 3000
      }).present();
    }
  }

  AbrirMapa(){
    let modal = this.modalCtrl.create(ModalMapaPage);
    modal.present();
    modal.onDidDismiss(parametros => {
      if(parametros){
        console.log(parametros);
        this.ubicacion = parametros;
      }
      else{
        console.log("El modal se cerró sin parámetros")
      }
    });
  }

  Cancelar(){
    this.viewCtrl.dismiss();
  }

}

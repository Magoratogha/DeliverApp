import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { ModalMapaPage } from '../modal-mapa/modal-mapa';
import { RestProvider } from '../../providers/rest/rest';

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

  constructor(private toastCtrl: ToastController, private http: RestProvider, public viewCtrl: ViewController, private modalCtrl: ModalController, public navParams: NavParams) {
    this.dataUs = this.navParams.get("data");
    console.log(this.dataUs);
  }

  Crear(){
    let data = {
      "type": this.tipo,
      "willing_pay": this.pago,
      "customer": this.dataUs.user.user_id,
      "description": this.descripcion,
      "latitud": this.ubicacion.lat,
      "longitud": this.ubicacion.lng
    }
    this.http.CrearDiligencia(data, this.dataUs.token);
    this.viewCtrl.dismiss();
    this.toastCtrl.create({
      message: 'Diligencia creada con exito!',
      duration: 3000
    }).present();
  }

  AbrirMapa(){
    let modal = this.modalCtrl.create(ModalMapaPage, {nombre:"Suite modal", compositor:"Hector Fabio Torres Cardona"});
    modal.present();
    modal.onDidDismiss(parametros => {
      if(parametros){
        console.log("El modal trajo esta info:")
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

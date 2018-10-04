import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { Tabs2Page } from "../tabs2/tabs2";
import { RegistrarTipoPage } from "../registrar-tipo/registrar-tipo";
import { ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  tabs:any = TabsPage;
  tabs2:any = Tabs2Page;
  registro:any = RegistrarTipoPage;

  nickname:string;
  password:string;

  constructor(public loadingCtrl: LoadingController, public restProvider: RestProvider, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  login() {
    let data = {
      "username": this.nickname,
      "password": this.password
    }

    this.presentLoading();

    this.restProvider.Login(data).then(us =>{
      if(us["user"]["user_type"] == "CL") {
        this.app.getRootNav().setRoot(TabsPage, {"data":us});
      }
      else {
        if(us["user"]["user_type"] == "RE") {
          this.app.getRootNav().setRoot(Tabs2Page, {"data":us});
        }
      }
    }).catch((error: any) => {
      this.toastCtrl.create({
        message: "Usuario o contraseña incorrectos!",
        duration: 3000
      }).present();
    });
  }

  presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Cargando...",
      duration: 1500
    });
    loader.present();
  }
}

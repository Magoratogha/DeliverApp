import { Component } from '@angular/core';
import { NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { Tabs2Page } from "../tabs2/tabs2";
import { RegistrarTipoPage } from "../registrar-tipo/registrar-tipo";
import { ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { StorageProvider } from '../../providers/storage/storage';

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

  constructor(public loadingCtrl: LoadingController, public stogare: StorageProvider, public restProvider: RestProvider, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  login() {
    let data = {
      "username": this.nickname,
      "password": this.password
    }

    let loader = this.loadingCtrl.create({
      content: "Cargando...",
    });
    loader.present();
    this.restProvider.Login(data).then(us =>{
      if(us["user"]["user_type"] == "CL") {
        this.stogare.SetData(us).then(() => {
          this.stogare.SetLog(true).then(() => {
            loader.dismiss();
            this.app.getRootNav().setRoot(TabsPage);
          });
        });
      }
      else {
        if(us["user"]["user_type"] == "RE") {
          this.stogare.SetData(us).then(() => {
            this.stogare.SetLog(true).then(() => {
              loader.dismiss();
              this.app.getRootNav().setRoot(Tabs2Page);
            });
          });
        }
      }
    }).catch((error: any) => {
      loader.dismiss();
      this.toastCtrl.create({
        message: "Usuario o contraseña incorrectos!",
        duration: 3000
      }).present();
    });
  }
}

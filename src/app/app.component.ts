import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrincipalPage } from '../pages/principal/principal';
import { StorageProvider } from "../providers/storage/storage";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;
  
  constructor(platform: Platform, private storage: StorageProvider, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.storage.LoadTuto().then(() => {
        if(this.storage.data.tuto) {
          this.rootPage = "IntroPage";
        }
        else {
          this.rootPage = PrincipalPage;
        }
        statusBar.styleLightContent();
        splashScreen.hide();
      });
    });
  }
}

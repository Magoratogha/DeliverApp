import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrincipalPage } from '../pages/principal/principal';
import { TabsPage } from '../pages/tabs/tabs';
import { Tabs2Page } from '../pages/tabs2/tabs2';
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
          this.storage.LoadLog().then(() => {
            if(this.storage.data.loggued){
              this.storage.LoadData().then(() => {
                if(this.storage.data.user["user"]["user_type"] == "CL") {
                  this.rootPage = TabsPage;
                }
                else {
                  this.rootPage = Tabs2Page;
                }
              });
            }
            else {
              this.rootPage = PrincipalPage;
            }
          });
        }
        statusBar.backgroundColorByHexString("001b21");
        splashScreen.hide();
      });
    });
  }
}

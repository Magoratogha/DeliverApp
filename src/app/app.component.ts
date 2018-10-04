import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PrincipalPage } from '../pages/principal/principal';
import { TabsPage } from '../pages/tabs/tabs';
import { Tabs2Page } from '../pages/tabs2/tabs2';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = PrincipalPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleLightContent();
      splashScreen.hide();
    });
  }
}

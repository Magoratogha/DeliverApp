import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { StorageProvider } from '../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  slides:any[] = [
    {
      title: "¡Bienvenido!",
      description: "<b>DeliverApp</b> es una aplicación pensada para sacarte de apuros. ¿Lo necesitas? Te lo llevamos.",
      image: "assets/imgs/ica-slidebox-img-1.png",
    },
    {
      title: "Publica tu problema",
      description: "Describe qué necesitas que hagan por ti y cuanto estás dispuesto a pagar por ello. Otros usuarios de DeliverApp verán tu solucitud y podrán ayudarte.",
      image: "assets/imgs/ica-slidebox-img-2.png",
    },
    {
      title: "Elige a quien más te convenga",
      description: "Una vez publicado tu anuncio, los demás usuarios podrán verlo y hacerte una contraoferta. Tu puedes elegir la que más se acomode a tus necesidades.",
      image: "assets/imgs/ica-slidebox-img-3.png",
    }
  ];
  
  constructor(private storage: StorageProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  SkipTuto(){
    this.storage.SetTuto(false);
    this.navCtrl.setRoot(PrincipalPage);
  }

}

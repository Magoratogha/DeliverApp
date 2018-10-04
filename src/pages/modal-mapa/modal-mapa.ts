import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-modal-mapa',
  templateUrl: 'modal-mapa.html',
})

export class ModalMapaPage {

  map:any;
  lat:number;
  lng:number;
  marker:any;

  constructor(private geolocation: Geolocation, public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadmap();
    this.getLocation();
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.map.flyTo({
        center: [resp.coords.longitude, resp.coords.latitude],
        zoom: 14
      });
      this.marker = new mapboxgl.Marker({
        color: '#144149',
        draggable: true
      }).setLngLat([resp.coords.longitude, resp.coords.latitude]).addTo(this.map);
    }).catch((error) => {
        console.log('Error getting location', error);
    });
  }

  loadmap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFnb3JhdG9naGEiLCJhIjoiY2pscjB0ZXl2MDAxNzN2cXRmdnc5cHZneCJ9.yAsJhoAogu8D-ki0lEmbVA';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10?optimize=true',
    });

    let navcontrol = new mapboxgl.NavigationControl({
      showCompass: false
    });
    this.map.addControl(navcontrol, 'bottom-right');
  }

  CerrarModal(){
    this.viewCtrl.dismiss(this.marker.getLngLat());
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import * as mapboxgl from 'mapbox-gl';
import { Geolocation } from '@ionic-native/geolocation';
import { InfoDiligenciaPage } from '../info-diligencia/info-diligencia';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-mapas-domicilio',
  templateUrl: 'mapas-domicilio.html',
})
export class MapasDomicilioPage {

  modal:any = InfoDiligenciaPage;
  map:any;
  listadil:any[] = [];
  usuarios = {
      "type": "geojson",
      "data": {
          "type": "FeatureCollection",
          "features": this.listadil
      }
  }
  lat:number;
  lng:number;

  constructor(private rest: RestProvider, private modalCtrl: ModalController, private geolocation: Geolocation, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.rest.GetDiligencias().then(res => {
      for(let diligencia of res["details"]){
        let customer = diligencia.data_customer.split(" ");
        let elemento = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [diligencia.longitud, diligencia.latitud]
            },
            properties: {
              "name": customer[0],
              "tel": customer[1],
              "tipo": diligencia.type,
              "pago": diligencia.willing_pay,
              "email": customer[2],
              "descripcion": diligencia.description
            }
        }
        this.listadil.push(elemento);
      }
    });
    this.loadmap(this.usuarios);
    this.getLocation();
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.map.flyTo({
        center: [resp.coords.longitude, resp.coords.latitude],
        zoom: 14
      });
      this.lng = resp.coords.longitude;
      this.lat = resp.coords.latitude;
    }).catch((error) => {
        console.log('Error getting location', error);
    });
  }

  loadmap(layer:any) {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFnb3JhdG9naGEiLCJhIjoiY2pscjB0ZXl2MDAxNzN2cXRmdnc5cHZneCJ9.yAsJhoAogu8D-ki0lEmbVA';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10?optimize=true',
    });

    this.map.on('load', function (){
      this.addSource('us', layer);
      this.addLayer({
        'id': 'usuarios',
        'type': 'circle',
        'source': 'us',
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
          'circle-radius': 8,
          'circle-color': 'rgba(179, 54, 54, 1)'
        }
      });
    });

    this.map.on('click', 'usuarios', e => {
      this.VerInfo(e.features[0].properties);
    });

    let navcontrol = new mapboxgl.NavigationControl({
      showCompass: false
    });
    this.map.addControl(navcontrol, 'bottom-right');

    let geocontrol = new mapboxgl.GeolocateControl({trackUserLocation: true});
    this.map.addControl(geocontrol, 'bottom-right');
  }

  reloadmap(layer:any) {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFnb3JhdG9naGEiLCJhIjoiY2pscjB0ZXl2MDAxNzN2cXRmdnc5cHZneCJ9.yAsJhoAogu8D-ki0lEmbVA';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10?optimize=true',
      center: [this.lng, this.lat],
      zoom: 14
    });

    this.map.on('load', function (){
      this.addSource('us', layer);
      this.addLayer({
        'id': 'usuarios',
        'type': 'circle',
        'source': 'us',
        'layout': {
            'visibility': 'visible'
        },
        'paint': {
          'circle-radius': 8,
          'circle-color': 'rgba(179, 54, 54, 1)'
        }
      });
    });

    this.map.on('click', 'usuarios', e => {
      this.VerInfo(e.features[0].properties);
    });

    let navcontrol = new mapboxgl.NavigationControl({
      showCompass: false
    });
    this.map.addControl(navcontrol, 'bottom-right');

    let geocontrol = new mapboxgl.GeolocateControl({trackUserLocation: true});
    this.map.addControl(geocontrol, 'bottom-right');
  }

  VerInfo(e:any){
    let modal = this.modalCtrl.create(InfoDiligenciaPage, e);
    modal.present();
    modal.onDidDismiss(parametros => {
      if(parametros){
        console.log("El modal trajo esta info:")
        console.log(parametros);
      }
      else{
        console.log("El modal se cerró sin parámetros")
      }
    });
  }

  Actualizar() {
    this.rest.GetDiligencias().then(res => {
      for(let diligencia of res["details"]){
        let customer = diligencia.data_customer.split(" ");
        let elemento = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [diligencia.longitud, diligencia.latitud]
            },
            properties: {
              "name": customer[0],
              "tel": customer[1],
              "tipo": diligencia.type,
              "pago": diligencia.willing_pay,
              "email": customer[2],
              "descripcion": diligencia.description
            }
        }
        this.listadil.push(elemento);
      }
    });
    this.reloadmap(this.usuarios);
  }

}

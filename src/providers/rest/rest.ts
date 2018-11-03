import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class RestProvider {

  apiUrl = 'https://deliverapp-app-movil.herokuapp.com/';

  constructor(private Http: HTTP, private toastCtrl: ToastController) {
  }

  CrearDiligencia(data, token){
    this.Http.setDataSerializer('json');
    return new Promise((resolve, reject) => {
      this.Http.post(this.apiUrl+'request/deliveries/', data, {
          'Access-Control-Allow-Origin': '*',
          'Accept':'application/json',
          'Content-Type': 'application/json'
      })
      .then(res => {
          resolve(JSON.parse(res.data));
          console.log(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  GetDiligencias(){
    this.Http.setDataSerializer('json');
    return new Promise((resolve, reject) => {
      this.Http.get(this.apiUrl+'request/list/', {}, {
          'Access-Control-Allow-Origin': '*',
          'Accept':'application/json',
          'Content-Type': 'application/json'
      })
      .then(res => {
          resolve(JSON.parse(res.data));
      }).catch(err => {
        reject(err);
      });
    });
  }

  Login(data) {
    this.Http.setDataSerializer('json');
    return new Promise((resolve, reject) => {
      this.Http.post(this.apiUrl+'login/', data, {
          'Access-Control-Allow-Origin': '*',
          'Accept':'application/json',
          'Content-Type': 'application/json'
        })
        .then(res => {
          resolve(JSON.parse(res.data));
      }).catch(err => {
        reject(err);
      });
    });
  }

  addUser(data, tipo) {
    if(tipo == "Customer"){
      this.Http.setDataSerializer('json');
      return new Promise((resolve, reject) => {
        this.Http.post(this.apiUrl+'sign_up/customer/', data, {
            'Access-Control-Allow-Origin': '*',
            'Accept':'application/json',
            'Content-Type': 'application/json'
          })
        .then(res => {
          resolve(JSON.parse(res.data));
        }).catch(err => {
          reject(err);
        });
      });
    }
    else{
      if(tipo == "Delivery"){
        this.Http.setDataSerializer('json');
        return new Promise((resolve, reject) => {
          this.Http.post(this.apiUrl+'sign_up/delivery/', data, {
              'Access-Control-Allow-Origin': '*',
              'Accept':'application/json',
              'Content-Type': 'application/json'
            })
          .then(res => {
            resolve(JSON.parse(res.data));
          }).catch(err => {
            reject(err);
          });
        });
      }
      else{
        console.log("Mal tipo de usuario");
      }
    }
  }

}

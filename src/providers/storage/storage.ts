import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageProvider {

  data = {
    "token": "",
    "user": {},
    "tuto": true
  }

  constructor(private storage: Storage) {  
  }

  LoadTuto() {
    return this.storage.get('tuto').then((value) => {
      if(value == true || value == false){
        this.data.tuto = value;
      } 
    });
  }

  LoadData() {
    this.storage.ready().then(() => {
      this.storage.get('token').then( token => {
        this.data.token = token; 
      });
      this.storage.get('user').then( val => {
        this.data.user = val; 
      });
    });
  }

  SetTuto(value: boolean) {
    this.data.tuto = value;
    this.storage.set('tuto', value);
  }

  SetToken(value: string) {
    this.storage.set('token', value);
  }

  SetDataUser(value: any) {
    this.storage.set('user', value);
  }
}

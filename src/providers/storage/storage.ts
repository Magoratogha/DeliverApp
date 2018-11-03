import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageProvider {

  data = {
    "user": {},
    "tuto": true,
    "loggued": false
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

  LoadLog() {
    return this.storage.get('log').then((value) => {
      if(value == true || value == false){
        this.data.loggued = value;
      } 
    });
  }

  LoadData() {
    return this.storage.get('user').then((value) => {
      this.data.user = (value); 
    });
  }

  SetTuto(value: boolean) {
    this.data.tuto = value;
    return this.storage.set('tuto', value);
  }

  SetLog(value: boolean) {
    this.data.loggued = value;
    return this.storage.set('log', value);
  }

  SetData(value: any) {
    this.data.user = value;
    return this.storage.set('user', value);
  }

  RemoveUserData() {
    this.data.user = {};
    return this.storage.remove('user');
  }
}

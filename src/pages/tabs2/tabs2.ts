import { Component } from '@angular/core';
import { Home2Page } from '../home2/home2';
import { AjustesPage } from '../ajustes/ajustes';
import { PerfilPage } from '../perfil/perfil';
import { MapasDomicilioPage } from '../mapas-domicilio/mapas-domicilio';
import { HistorialDomicilioPage } from '../historial-domicilio/historial-domicilio';

@Component({
  selector: 'page-tabs2',
  templateUrl: 'tabs2.html',
})
export class Tabs2Page {

  tab1: any;
  tab2: any;
  tab3: any;
  tab4: any;
  tab5: any;
  
  constructor() {
    this.tab1 = Home2Page;
    this.tab2 = PerfilPage;
    this.tab3 = HistorialDomicilioPage;
    this.tab4 = MapasDomicilioPage;
    this.tab5 = AjustesPage;    
  }
}

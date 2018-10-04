import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, LoadingController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { HTTP } from '@ionic-native/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Home2Page } from '../pages/home2/home2';
import { PrincipalPage } from '../pages/principal/principal';
import { TabsPage } from '../pages/tabs/tabs';
import { Tabs2Page } from '../pages/tabs2/tabs2';
import { AjustesPage } from '../pages/ajustes/ajustes';
import { PerfilPage } from '../pages/perfil/perfil';
import { DiligenciasPage } from '../pages/diligencias/diligencias';
import { RegistrarTipoPage } from '../pages/registrar-tipo/registrar-tipo';
import { RegistrarUsuarioNormalPage } from '../pages/registrar-usuario-normal/registrar-usuario-normal';
import { RegistrarUsuarioDomicilioPage } from '../pages/registrar-usuario-domicilio/registrar-usuario-domicilio';
import { RegistroExitosoPage } from '../pages/registro-exitoso/registro-exitoso';
import { MapasDomicilioPage } from '../pages/mapas-domicilio/mapas-domicilio';
import { EditarPerfilPage } from '../pages/editar-perfil/editar-perfil';
import { CrearDiligenciaPage } from '../pages/crear-diligencia/crear-diligencia';
import { ModalMapaPage } from '../pages/modal-mapa/modal-mapa';
import { PqrsPage } from '../pages/pqrs/pqrs';
import { InfoDiligenciaPage } from '../pages/info-diligencia/info-diligencia';
import { EnviarOfertaPage } from '../pages/enviar-oferta/enviar-oferta';
import { HistorialDomicilioPage } from '../pages/historial-domicilio/historial-domicilio';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    HistorialDomicilioPage,
    EnviarOfertaPage,
    PqrsPage,
    InfoDiligenciaPage,
    CrearDiligenciaPage,
    EditarPerfilPage,
    HomePage,
    Home2Page,
    PrincipalPage,
    TabsPage,
    Tabs2Page,
    AjustesPage,
    PerfilPage,
    ModalMapaPage,
    DiligenciasPage,
    MapasDomicilioPage,
    RegistrarTipoPage,
    RegistrarUsuarioNormalPage,
    RegistrarUsuarioDomicilioPage,
    RegistroExitosoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistorialDomicilioPage,
    EnviarOfertaPage,
    CrearDiligenciaPage,
    Home2Page,
    InfoDiligenciaPage,
    PrincipalPage,
    TabsPage,
    Tabs2Page,
    PqrsPage,
    AjustesPage,
    PerfilPage,
    ModalMapaPage,
    EditarPerfilPage,
    DiligenciasPage,
    MapasDomicilioPage,
    RegistrarTipoPage,
    RegistrarUsuarioNormalPage,
    RegistrarUsuarioDomicilioPage,
    RegistroExitosoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    HttpClient
  ]
})
export class AppModule {}

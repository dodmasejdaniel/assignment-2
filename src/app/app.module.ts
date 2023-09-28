import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { environment } from 'src/environment/environment';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';


@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, 
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideFirestore(()=> getFirestore())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Geolocation],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { DemoMaterialModule } from './material-module';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { WorldPageComponent } from './world-page/world-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';

import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProfilPageComponent,
    WorldPageComponent,
    MapPageComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){         
    firebase.initializeApp(environment.firebase);
  }
 }

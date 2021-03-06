import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DemoMaterialModule } from './material-module';
import { ProfilPageComponent, SmogDialog } from './profil-page/profil-page.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { WorldPageComponent } from './world-page/world-page.component';

import { SettingsPageComponent } from './settings-page/settings-page.component';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { MapPageComponent } from './map-page/map-page.component';
import { environment } from 'src/environments/environment';

import {MatDialogModule} from '@angular/material/dialog';

import * as firebase from 'firebase/app';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { AngularFireModule } from '@angular/fire/compat';
import { SignUpComponent } from './sign-up/sign-up.component';

firebase.initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProfilPageComponent,
    WorldPageComponent,
    SettingsPageComponent,
    MapPageComponent,
    SignInPageComponent,
    SignUpComponent,
    SmogDialog,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
    CommonModule,
     // Specify ng-circle-progress as an import
     NgCircleProgressModule.forRoot({
      "radius": 30,
      "space": -10,
      "outerStrokeGradient": false,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "lazy": false
    }),
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

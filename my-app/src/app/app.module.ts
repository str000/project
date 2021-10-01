import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoMaterialModule } from './material-module';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { WorldPageComponent } from './world-page/world-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
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
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

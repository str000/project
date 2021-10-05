import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import Komponentow
import { MainPageComponent } from './main-page/main-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { WorldPageComponent } from './world-page/world-page.component';
import { SmogPageComponent } from './smog-page/smog-page.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', component: MainPageComponent, children: [
    {path: 'profile', component: ProfilPageComponent},
    {path: 'world', component: WorldPageComponent},
    {path: 'map', component: MapPageComponent},
    {path: 'settings', component: SettingsPageComponent},
    {path: 'smog', component: SmogPageComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule,CommonModule]
})
export class AppRoutingModule { }

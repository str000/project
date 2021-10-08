import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import Komponentow
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { SettingsPageComponent } from './settings-page/settings-page.component';
import { WorldPageComponent } from './world-page/world-page.component';
import { SmogPageComponent } from './smog-page/smog-page.component';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './map-page/map-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/compat/auth-guard';
import { SignUpComponent } from './sign-up/sign-up.component';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['sign-in']);
const redirectLoggedInToAccount = () => redirectLoggedInTo(['profile']);

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInToAccount }, component: SignInPageComponent},
  { path: '', component: MainPageComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToHome }, children: [
    {path: 'profile', component: ProfilPageComponent},
    {path: 'world', component: WorldPageComponent},
    {path: 'map', component: MapPageComponent},
    {path: 'settings', component: SettingsPageComponent},
    {path: 'smog', component: SmogPageComponent}
  ]},
  { path: 'sign-up', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule,CommonModule]
})
export class AppRoutingModule { }

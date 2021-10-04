import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//Import Komponentów
import { MapPage } from './map/map.page';
import { ProfilePage } from './profile/profile.page';
import { SettingsPage } from './settings/settings.page';
import { WorldPage } from './world/world.page';

const routes: Routes = [
  { path: 'profile', component: ProfilePage },
  { path: 'world', component: WorldPage },
  { path: 'map', component: MapPage },
  { path: 'settings', component: SettingsPage }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

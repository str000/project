import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorldPage } from './world.page';

const routes: Routes = [
  {
    path: '',
    component: WorldPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorldPageRoutingModule {}

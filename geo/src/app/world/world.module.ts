import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorldPageRoutingModule } from './world-routing.module';

import { WorldPage } from './world.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorldPageRoutingModule
  ],
  declarations: [WorldPage]
})
export class WorldPageModule {}

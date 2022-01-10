import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionneurPageRoutingModule } from './actionneur-routing.module';

import { ActionneurPage } from './actionneur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionneurPageRoutingModule
  ],
  declarations: [ActionneurPage]
})
export class ActionneurPageModule {}

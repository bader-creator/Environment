import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SuperTabsModule } from '@ionic-super-tabs/angular';

import { IonicModule } from '@ionic/angular';

import { MonitorPageRoutingModule } from './monitor-routing.module';

import { MonitorPage } from './monitor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitorPageRoutingModule,
    SuperTabsModule
  ],
  declarations: [MonitorPage]
})
export class MonitorPageModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSitePageRoutingModule } from './list-site-routing.module';

import { ListSitePage } from './list-site.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSitePageRoutingModule
  ],
  declarations: [ListSitePage]
})
export class ListSitePageModule {}

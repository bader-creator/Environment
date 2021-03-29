import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionneurPage } from './actionneur.page';

const routes: Routes = [
  {
    path: '',
    component: ActionneurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionneurPageRoutingModule {}

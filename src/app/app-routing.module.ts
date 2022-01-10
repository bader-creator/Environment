import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'bill/:idSite',
    loadChildren: () => import('./bill/bill.module').then(m => m.BillPageModule)
  },
  {
    path: 'monitor/:idSite',
    loadChildren: () => import('./monitor/monitor.module').then(m => m.MonitorPageModule)
  },
  {
    path: 'quality/:idSite',
    loadChildren: () => import('./quality/quality.module').then(m => m.QualityPageModule)
  },
  {
    path: 'alarme/:idSite',
    loadChildren: () => import('./alarme/alarme.module').then(m => m.AlarmePageModule)
  },
  {
    path: 'environment/:idSite',
    loadChildren: () => import('./environment/environment.module').then(m => m.EnvironmentPageModule)
  },
  {
    path: 'actionneur/:idSite',
    loadChildren: () => import('./actionneur/actionneur.module').then(m => m.ActionneurPageModule)
  },
  {
    path: 'list-site',
    loadChildren: () => import('./list-site/list-site.module').then(m => m.ListSitePageModule)
  },
  {
    path: 'dashboard/:idSite',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'google-maps/:latitude/:longitude',
    loadChildren: () => import('./google-maps/google-maps.module').then(m => m.GoogleMapsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

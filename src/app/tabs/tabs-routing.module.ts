import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'favoriet',
        loadChildren: () => import('../home/favoriet/favoriet.module').then( m => m.FavorietPageModule)
      },
      {
        path: 'details',
        loadChildren: () => import('../home/details/details.module').then( m => m.DetailsPageModule)
      },
      {
        path: 'plant',
        loadChildren: () => import('../home/plant/plant.module').then( m => m.PlantPageModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {  path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  /*exports: [RouterModule],*/
})
export class TabsPageRoutingModule {}

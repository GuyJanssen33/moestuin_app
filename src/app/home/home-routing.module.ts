import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    /*children: [
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
    ]*/
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavorietPage } from './favoriet.page';

const routes: Routes = [
  {
    path: '',
    component: FavorietPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavorietPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlantPage } from './plant.page';
import {home} from "ionicons/icons";
import {HomePage} from "../home.page";

const routes: Routes = [
  {
    path: '',
    component: PlantPage,
  },
  {
    path: 'home',
    component: HomePage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlantPageRoutingModule {}

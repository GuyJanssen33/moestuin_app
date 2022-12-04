import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavorietPageRoutingModule } from './favoriet-routing.module';

import { FavorietPage } from './favoriet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavorietPageRoutingModule
  ],
  declarations: [FavorietPage]
})
export class FavorietPageModule {}

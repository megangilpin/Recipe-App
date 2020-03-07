import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipeIngPageRoutingModule } from './recipe-ing-routing.module';

import { RecipeIngPage } from './recipe-ing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipeIngPageRoutingModule
  ],
  declarations: [RecipeIngPage]
})
export class RecipeIngPageModule {}

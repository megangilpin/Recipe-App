import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeIngPage } from './recipe-ing.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeIngPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeIngPageRoutingModule {}

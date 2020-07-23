import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PositioningComponent } from './positioning/positioning.component';

const routes: Routes = [
  {path: 'positioning', component: PositioningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

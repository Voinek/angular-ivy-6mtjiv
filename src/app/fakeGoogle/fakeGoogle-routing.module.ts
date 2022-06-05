import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FakeGoogleComponent } from './fakeGoogle.component';


const routes: Routes = [
  {
    path: '',
    component: FakeGoogleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FakeGoogleRoutingModule { }
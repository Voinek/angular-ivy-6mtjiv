import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeGoogleRoutingModule } from './fakeGoogle-routing.module';
import { FakeGoogleComponent } from './fakeGoogle.component';
import { MaterialExampleModule } from '../../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  imports: [
    CommonModule,
    FakeGoogleRoutingModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [FakeGoogleComponent],
})
export class FakeGoogleModule {}

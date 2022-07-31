import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {AppMaterialModule} from '../shared/app-material/app-material.module'

import { ContatsRoutingModule } from './contats-routing.module';
import { ContatsComponent } from './contats/contats.component';
import { ContatFormComponent } from './contat-form/contat-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ContatsComponent,
    ContatFormComponent
  ],
  imports: [
    CommonModule,
    ContatsRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule

  ]
})
export class ContatsModule { }

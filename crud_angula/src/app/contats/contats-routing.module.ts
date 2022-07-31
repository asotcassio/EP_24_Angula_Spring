import { ContatFormComponent } from './contat-form/contat-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatsComponent } from './contats/contats.component';

const routes: Routes = [
  {path : '', component: ContatsComponent},
  {path : 'new', component: ContatFormComponent}
];

@NgModule( {
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatsRoutingModule { }

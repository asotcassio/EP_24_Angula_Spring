import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './components/pipes/pipes.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { IfRenderComponent } from './components/if-render/if-render.component';

const routes: Routes = [

  {path: '',component: HomeComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id',component: ItemDetailComponent},
  {path: 'pipe', component: PipesComponent},
  {path: 'event', component: EventosComponent},
  {path: 'emitter', component: EmitterComponent},
  {path: 'if',component: IfRenderComponent},
  {path: 'parent',component: TwoWayBindingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

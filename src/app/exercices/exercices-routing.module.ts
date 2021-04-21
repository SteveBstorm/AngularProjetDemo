import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo1Component } from './component/exo1/exo1.component';
import { Exo2Component } from './component/exo2/exo2.component';
import { Exo3Component } from './component/exo3/exo3.component';
import { DetailComponent } from './component/exo4/detail/detail.component';
import { Exo4Component } from './component/exo4/exo4.component';
import { NewComponent } from './component/exo4/new/new.component';
import { FanResolverService } from './component/exo4/service/fan-resolver.service';
import { UpdateComponent } from './component/exo4/update/update.component';
import { ExercicesComponent } from './exercices.component';

const routes: Routes = [
  {path : "", component : ExercicesComponent, children : [
    {path : "exo1", component : Exo1Component},
    {path : "exo2", component : Exo2Component},
    {path : "exo3", component : Exo3Component},
    {path : "exo4", component : Exo4Component},
    {path : "exo4/new", component : NewComponent},
    {path : "exo4/detail/:id", resolve : {resolvedFan : FanResolverService}, component : DetailComponent},
    {path : "exo4/update/:id", resolve : {resolvedFan : FanResolverService}, component : UpdateComponent},

  ]},
  { path : '**', redirectTo : '404'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExercicesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { HomeComponent } from './home/home.component';
import { FourofourComponent } from './shared/component/fourofour/fourofour.component';

const routes: Routes = [
  
  { path : "home", component : HomeComponent},
  { path : "about", component : AboutComponent},
  { path : "demo", loadChildren : () => import('./demo/demo.module').then(m => m.DemoModule)},
  { path : "exo", loadChildren : () => import('./exercices/exercices.module').then(m => m.ExercicesModule)},
  { path : "404", component : FourofourComponent},
  { path : "" , redirectTo :"home", pathMatch : "full"},
  { path : "**", redirectTo : '404'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

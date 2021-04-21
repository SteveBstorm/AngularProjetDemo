import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { Demo1Component } from './component/demo1/demo1.component';
import { Demo10Component } from './component/demo10/demo10.component';
import { Demo11Component } from './component/demo11/demo11.component';
import { Demo12Component } from './component/demo12/demo12.component';
import { RecupParamComponent } from './component/demo12/recup-param/recup-param.component';
import { Demo13Component } from './component/demo13/demo13.component';
import { Demo14Component } from './component/demo14/demo14.component';
import { ResolvedComponent } from './component/demo14/resolved/resolved.component';
import { ObjectResolverService } from './component/demo14/services/object-resolver.service';
import { Demo15Component } from './component/demo15/demo15.component';
import { Demo16Component } from './component/demo16/demo16.component';
import { Demo2Component } from './component/demo2/demo2.component';
import { Demo3Component } from './component/demo3/demo3.component';
import { Demo4Component } from './component/demo4/demo4.component';
import { Demo5Component } from './component/demo5/demo5.component';
import { Demo6Component } from './component/demo6/demo6.component';
import { Demo7Component } from './component/demo7/demo7.component';
import { Demo8Component } from './component/demo8/demo8.component';
import { Demo9Component } from './component/demo9/demo9.component';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  //{path : "", component : DemoComponent, pathMatch : "full"}
  {path : '', component : DemoComponent, children : [
    {path : 'demo1', component : Demo1Component},
    {path : 'demo2', component : Demo2Component},
    {path : 'demo3', component : Demo3Component},
    {path : 'demo4', component : Demo4Component},
    {path : 'demo5', component : Demo5Component},
    {path : 'demo6', component : Demo6Component},
    {path : 'demo7', component : Demo7Component},
    {path : 'demo8', component : Demo8Component},
    {path : 'demo9', component : Demo9Component},
    {path : 'demo10', component : Demo10Component},
    {path : 'demo11', component : Demo11Component},
    {path : 'demo12', component : Demo12Component, children : [
      {path : 'recup/:myParameter', component : RecupParamComponent}
    ]},
    {path : 'demo13', canActivate : [AuthGuard], component : Demo13Component},
    {path : 'demo14', component : Demo14Component},
    {path : 'resolved/:index', resolve : {monObjet : ObjectResolverService} , component : ResolvedComponent},
    {path : 'demo15', component : Demo15Component},
    {path : 'demo16', component : Demo16Component},


    
  ]},
  { path : '**', redirectTo : '404'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }

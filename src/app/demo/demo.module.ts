import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';
import { Demo1Component } from './component/demo1/demo1.component';
import { Demo2Component } from './component/demo2/demo2.component';
import { FormsModule } from '@angular/forms';
import { Demo3Component } from './component/demo3/demo3.component';
import { Demo4Component } from './component/demo4/demo4.component';
import { Demo5Component } from './component/demo5/demo5.component';
import { SharedModule } from '../shared/shared.module';
import { Demo6Component } from './component/demo6/demo6.component';
import { Demo7Component } from './component/demo7/demo7.component';
import { Demo8Component } from './component/demo8/demo8.component';
import { EnfantComponent } from './component/demo8/enfant/enfant.component';
import { Demo9Component } from './component/demo9/demo9.component';
import { FakeauthService } from './service/fakeauth.service';
import { Demo10Component } from './component/demo10/demo10.component';
import { Demo11Component } from './component/demo11/demo11.component';
import { Demo12Component } from './component/demo12/demo12.component';
import { RecupParamComponent } from './component/demo12/recup-param/recup-param.component';
import { Demo13Component } from './component/demo13/demo13.component';
import { Demo14Component } from './component/demo14/demo14.component';
import { ResolvedComponent } from './component/demo14/resolved/resolved.component';
import { Demo15Component } from './component/demo15/demo15.component';
import { Demo16Component } from './component/demo16/demo16.component';


@NgModule({
  declarations: [
    DemoComponent,
    Demo1Component,
    Demo2Component,
    Demo3Component,
    Demo4Component,
    Demo5Component,
    Demo6Component,
    Demo7Component,
    Demo8Component,
    EnfantComponent,
    Demo9Component,
    Demo10Component,
    Demo11Component,
    Demo12Component,
    RecupParamComponent,
    Demo13Component,
    Demo14Component,
    ResolvedComponent,
    Demo15Component,
    Demo16Component
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ],
  //providers : [FakeauthService],
  bootstrap : [DemoComponent]
})
export class DemoModule { }

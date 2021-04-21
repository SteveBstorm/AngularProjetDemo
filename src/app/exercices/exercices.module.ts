import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExercicesRoutingModule } from './exercices-routing.module';
import { ExercicesComponent } from './exercices.component';
import { SharedModule } from '../shared/shared.module';
import { Exo1Component } from './component/exo1/exo1.component';
import { Exo2Component } from './component/exo2/exo2.component';
import { ListeComponent } from './component/exo2/liste/liste.component';
import { Exo3Component } from './component/exo3/exo3.component';
import { Liste2Component } from './component/exo3/liste2/liste2.component';
import { Exo4Component } from './component/exo4/exo4.component';
import { NewComponent } from './component/exo4/new/new.component';
import { UpdateComponent } from './component/exo4/update/update.component';
import { DetailComponent } from './component/exo4/detail/detail.component';


@NgModule({
  declarations: [

  
    ExercicesComponent,
        Exo1Component,
        Exo2Component,
        ListeComponent,
        Exo3Component,
        Liste2Component,
        Exo4Component,
        NewComponent,
        UpdateComponent,
        DetailComponent
  ],
  imports: [
    CommonModule,
    ExercicesRoutingModule,
    SharedModule
  ],
  bootstrap : [ExercicesComponent]
})
export class ExercicesModule { }

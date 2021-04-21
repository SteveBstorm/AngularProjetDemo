import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToFarhenheitPipe } from './pipes/to-farhenheit.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { ToTimePipe } from './pipes/to-time.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { FourofourComponent } from './component/fourofour/fourofour.component';



@NgModule({
  declarations: [
    ToFarhenheitPipe,
    TemperaturePipe,
    ToTimePipe,
    HighlightDirective,
    FourofourComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  exports : [
    FormsModule,
    ReactiveFormsModule,
    ToFarhenheitPipe,
    TemperaturePipe,
    ToTimePipe,
    HighlightDirective,
    FourofourComponent,
  ]
})
export class SharedModule { }

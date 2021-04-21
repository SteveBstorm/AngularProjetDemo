import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-liste2',
  templateUrl: './liste2.component.html',
  styleUrls: ['./liste2.component.scss']
})
export class Liste2Component implements OnInit {

  @Input() liste : Article[];
  @Output() supprimer : EventEmitter<number>
  @Output() addQty : EventEmitter<number>
  @Output() remQty : EventEmitter<number>

  constructor() { 
    this.supprimer = new EventEmitter<number>();
    this.addQty = new EventEmitter<number>();
    this.remQty = new EventEmitter<number>();
   }

  ngOnInit(): void {
  }

  del(index : number) : void {
    this.supprimer.emit(index)
  }
  
  add(index : number) : void {
    this.addQty.emit(index)
  }
  
  rem(index : number) : void {
    this.remQty.emit(index)
  }

}

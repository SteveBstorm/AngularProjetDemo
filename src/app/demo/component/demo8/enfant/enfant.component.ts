import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {

  @Input() title :string;
  @Input() message :string;

  @Output() monEvent : EventEmitter<string>

  constructor() {
    this.monEvent = new EventEmitter<string>();
   }

  ngOnInit(): void {
  }

  methode(s : string) {
    this.monEvent.emit(s)
  }

 
}

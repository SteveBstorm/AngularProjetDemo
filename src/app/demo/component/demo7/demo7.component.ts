import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.scss']
})
export class Demo7Component implements OnInit {

  maVariable : string;
  isToggled : boolean;
  liste : string[];

  constructor() { }

  ngOnInit(): void {
    this.isToggled = false;
    this.liste = ["pomme", "poire", "peche", "prune", "papaye", "porange", "pamplemousse"]
  }

  toggle(){
    this.isToggled = !this.isToggled
  }

}

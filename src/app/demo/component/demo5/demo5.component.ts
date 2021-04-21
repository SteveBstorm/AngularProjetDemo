import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  maVar1 : string;
  maVar2 : number;
  maVar3 : Date;

  temperature : number;

  constructor() { }

  ngOnInit(): void {
    this.maVar1 = "Salut tout le monde";
    this.maVar2 = 10.123456;
    this.maVar3 = new Date();
    this.temperature = 25;
  }

}

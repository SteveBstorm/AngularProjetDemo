import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {

  maVar : string;

  constructor() { }

  ngOnInit(): void {
    this.maVar = "Salut tout le monde !!!"
  }

  maMethode(s : string){
    this.maVar = s
  }

}

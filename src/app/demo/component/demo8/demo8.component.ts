import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.scss']
})
export class Demo8Component implements OnInit {

  myProp : string = "En attente du children...";
  message : string = "mon message pour l'enfant";

  constructor() { }

  ngOnInit(): void {
  }

  reactToChildren(s : string){
    this.myProp = s
  }

}

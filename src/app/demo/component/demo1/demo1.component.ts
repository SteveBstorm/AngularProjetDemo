import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  maVar : string; //par défaut, les propiétés sont publiques

  constructor() { }

  ngOnInit(): void {
    this.setVar("Salut")
  }

  setVar(texte : string) : void
  {
    this.maVar = texte
  }

}

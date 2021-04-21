import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  article : string;
  liste : string[] = ["truc", "bidule"]

  constructor() { }

  ngOnInit(): void {
  }

  ajout() : void{
    this.liste.push(this.article)
  }

  deleteItem(index : number) :void {
    this.liste.splice(index, 1)
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  myProp : number;
  url : string = "http://www.google.be"
  bool : boolean = false

  constructor() { }

  ngOnInit(): void {
    this.myProp = 0;
  }

  changeValue() {
    this.myProp = 42
  }

}

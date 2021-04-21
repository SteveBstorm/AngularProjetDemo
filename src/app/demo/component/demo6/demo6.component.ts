import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss']
})
export class Demo6Component implements OnInit {

  italic : boolean = false;
  bold : boolean = false;
  size : boolean = false;
  currentStyle : any;
  class : boolean = false;
  nomClasse : string = "test";
  constructor() { }

  ngOnInit(): void {
    this.setCurrentStyle();
  }

  setCurrentStyle() {
    this.currentStyle = {
      'font-style' : this.italic ? 'italic' : 'normal',
      'font-weight' : this.bold ? 'bold' : 'normal',
      'font-size' : this.size ? '24px' : '12px'
    }
  }

  switchItalic() {
    this.italic = !this.italic;
    this.setCurrentStyle();
  }

  switchBold() {
    this.bold = !this.bold;
    this.setCurrentStyle();
  }

  switchSize() {
    this.size = !this.size;
    this.setCurrentStyle();
  }

  switchClass(){
    this.class = !this.class;
  }

}

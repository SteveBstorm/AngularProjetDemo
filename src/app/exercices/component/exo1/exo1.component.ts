import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component implements OnInit {

  temps : number;
  timer : any;
  constructor() { }

  ngOnInit(): void {
    this.temps = 55;
  }

  start(){
    this.timer = setInterval(
      () => {
      this.temps++;
    }, 1000)
  }

  pause(){
    clearInterval(this.timer);
    this.timer = null;
  }

  reset() {
    this.temps = 0;
    this.pause();
  }

}

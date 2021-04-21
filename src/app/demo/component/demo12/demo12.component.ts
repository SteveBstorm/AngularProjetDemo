import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo12',
  templateUrl: './demo12.component.html',
  styleUrls: ['./demo12.component.scss']
})
export class Demo12Component implements OnInit {

  input : string

  constructor(
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  redirect() {
    this._router.navigate(['demo/demo12/recup/'+ this.input])
  }

}

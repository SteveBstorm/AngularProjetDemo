import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    //throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}

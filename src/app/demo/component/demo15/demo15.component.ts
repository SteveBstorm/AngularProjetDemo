import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';

@Component({
  selector: 'app-demo15',
  templateUrl: './demo15.component.html',
  styleUrls: ['./demo15.component.scss']
})
export class Demo15Component implements OnInit {

  userNameSession : string;
  userNameLocal : string;

  constructor(
    private _session : SessionService
  ) { }

  ngOnInit(): void {
    this.userNameSession = sessionStorage.getItem('un')
    this.userNameLocal = localStorage.getItem('un')

  }

  login() {
    this._session.login()
    this.userNameSession = sessionStorage.getItem('un')
    this.userNameLocal = localStorage.getItem('un')
  }

  logout() {
    this._session.logout()
    this.userNameSession = sessionStorage.getItem('un')
    this.userNameLocal = localStorage.getItem('un')

  }

}

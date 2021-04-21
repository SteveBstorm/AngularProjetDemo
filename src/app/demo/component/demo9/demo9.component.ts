import { Component, OnInit } from '@angular/core';
import { FakeauthService } from '../../service/fakeauth.service';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.scss'],
  //providers : [FakeauthService]
})
export class Demo9Component implements OnInit {

  isConnected : boolean;

  constructor(
    private _authService : FakeauthService
  ) { }

  ngOnInit(): void {
    this.isConnected = this._authService.isConnected
  }

  login() {
   // this.isConnected = true
    this._authService.connect()
    this.isConnected = this._authService.isConnected
  }

  logout() {
    //this.isConnected = false
     this._authService.disconnect()
     this.isConnected = this._authService.isConnected
  }

}

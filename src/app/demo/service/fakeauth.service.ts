import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  constructor() { }

  isConnected : boolean = false;

  connect() {
    this.isConnected = true;
  }

  disconnect() {
    this.isConnected = false;
  }
}

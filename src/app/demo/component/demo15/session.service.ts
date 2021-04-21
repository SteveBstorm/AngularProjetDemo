import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private userName : string = "Arthur"

  constructor() { }

  login() {
    sessionStorage.setItem("un", this.userName)
    localStorage.setItem("un", this.userName)
  }
  logout(){
    sessionStorage.clear()
    localStorage.clear()
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthwithSubjectService {

  private isAuth : boolean = false;

  mySubject : Subject<boolean> = new Subject<boolean>()

  emit() {
    this.mySubject.next(this.isAuth)
  }

  constructor() { }

  login() {
    this.isAuth = true
    this.emit()
  }

  logout() {
    this.isAuth = false
    this.emit()
  }
}

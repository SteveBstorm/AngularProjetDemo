import { Component, OnInit } from '@angular/core';
import { AuthwithSubjectService } from './authwith-subject.service';

@Component({
  selector: 'app-demo16',
  templateUrl: './demo16.component.html',
  styleUrls: ['./demo16.component.scss']
})
export class Demo16Component implements OnInit {

  isAuth : boolean

  constructor(
    private _auth : AuthwithSubjectService
  ) { }

  ngOnInit(): void {
    this._auth.mySubject.subscribe(
      (x : boolean) => {
      this.isAuth = x;
      console.log("is auth = " +x)
    })
  }

}

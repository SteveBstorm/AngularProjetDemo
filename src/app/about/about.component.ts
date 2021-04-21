import { Component, OnInit } from '@angular/core';
import { AuthwithSubjectService } from '../demo/component/demo16/authwith-subject.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  // Tout décommenter pour la démo 16

  constructor(
    //private _auth : AuthwithSubjectService
  ) { }

  ngOnInit(): void {
  }
/*
  login() {
    this._auth.login()
  }

  logout() {
    this._auth.logout()
  }
  */

}

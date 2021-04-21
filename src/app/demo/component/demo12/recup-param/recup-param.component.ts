import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recup-param',
  templateUrl: './recup-param.component.html',
  styleUrls: ['./recup-param.component.scss']
})
export class RecupParamComponent implements OnInit {

  parameter : string

  constructor(
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.parameter = this._activatedRoute.snapshot.params['myParameter']
  }

}

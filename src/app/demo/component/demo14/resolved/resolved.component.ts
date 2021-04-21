import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-resolved',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.scss']
})
export class ResolvedComponent implements OnInit {

  objetResolu : string
  constructor(
    private _activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.objetResolu)
    this.objetResolu = this._activatedRoute.snapshot.data['monObjet']
    console.log(this.objetResolu)
  }

}

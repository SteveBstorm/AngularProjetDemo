import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fan } from './models/fan.model';
import { FanService } from './service/fan.service';

@Component({
  selector: 'app-exo4',
  templateUrl: './exo4.component.html',
  styleUrls: ['./exo4.component.scss']
})
export class Exo4Component implements OnInit {

  listeFan : Fan[]

  constructor(
    private _fanService : FanService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.listeFan = this._fanService.getAll()

  }

  delete(id : number) :void {
    this._fanService.deleteFan(id);
  }

  update(id : number) {
    this._router.navigate(['exo/exo4/update/'+id])
  }

}

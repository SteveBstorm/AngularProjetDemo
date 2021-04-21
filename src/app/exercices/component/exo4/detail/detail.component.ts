import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Fan } from '../models/fan.model';
import { FanService } from '../service/fan.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  currentFan : Fan

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _fanService : FanService
    ) { }

  ngOnInit(): void {
    this.currentFan = this._fanService.getById(this._activatedRoute.snapshot.params['id'])
    //this.currentFan = this._activatedRoute.snapshot.data['resolvedFan']
  }

}

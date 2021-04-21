import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Fan } from '../models/fan.model';
import { FanService } from './fan.service';

@Injectable({
  providedIn: 'root'
})
export class FanResolverService implements Resolve<Fan> {

  constructor(
    private _fanService : FanService
  ) { }

  resolve(route : ActivatedRouteSnapshot) : Fan {
    return this._fanService.getById(route.params['id'])
  }
}

import { Component, OnInit } from '@angular/core';
import { MalisteService } from './services/maliste.service';

@Component({
  selector: 'app-demo14',
  templateUrl: './demo14.component.html',
  styleUrls: ['./demo14.component.scss']
})
export class Demo14Component implements OnInit {

  liste : string[]

  constructor(
    private _service : MalisteService
  ) { }

  ngOnInit(): void {
    this.liste = this._service.getList();
  }

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DateValid } from '../DateValidator';
import { Fan } from '../models/fan.model';
import { FanService } from '../service/fan.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  fg : FormGroup

  constructor(
    private _builder : FormBuilder,
    private _fanService : FanService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() : void {
    this.fg = this._builder.group({
      nom : [null, Validators.required],
      dateNaiss : [null, [Validators.required, DateValid()]],
      series : this._builder.array([])
    })
  }

  getSeries() : FormArray {
    return this.fg.get('series') as FormArray
  }

  addSerie() : void  {
    this.getSeries().push(new FormControl(null, Validators.required))
  }

  removeSerie(id : number) : void {
    this.getSeries().removeAt(id)
  }

  submitFan() : void {
    let newFan = new Fan();
    newFan.nom = this.fg.get('nom').value;
    newFan.dateNaissance = this.fg.get('dateNaiss').value;
    newFan.series = this.fg.get('series').value ? this.fg.get('series').value : []

    this._fanService.saveFan(newFan)
    
  }

}

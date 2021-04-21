import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DateValid } from '../DateValidator';
import { Fan } from '../models/fan.model';
import { FanService } from '../service/fan.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  currentFan : Fan
  fg : FormGroup
  currentId : number

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _builder : FormBuilder,
    private _fanService : FanService
  ) { }

  ngOnInit(): void {
    this.currentId = this._activatedRoute.snapshot.params['id']
    //this.currentFan = this._activatedRoute.snapshot.data['resolvedFan']
    //this.currentFan = this._fanService.getById(this._activatedRoute.snapshot.params['id'])
    this.initForm()
  }

  initForm() : void {
    this.fg = this._builder.group({
      nom : [this.currentFan.nom, Validators.required],
      dateNaiss : [this.currentFan.dateNaissance, [Validators.required, DateValid()]],
      series : this._builder.array([])
    })
    if(this.currentFan.series.length > 0){
      for(let i = 0; i < this.currentFan.series.length; i++){
        this.getSeries().push(new FormControl(this.currentFan.series[i], Validators.required))
      }
    }
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
    this.currentFan.nom = this.fg.get('nom').value;
    this.currentFan.dateNaissance = this.fg.get('dateNaiss').value;
    this.currentFan.series = this.fg.get('series').value ? this.fg.get('series').value : []

    this._fanService.saveFan(this.currentFan, this.currentId)
    
  }

}

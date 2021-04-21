import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MinLengthValidators } from 'src/app/shared/validators/MinLengthValidator';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrls: ['./demo11.component.scss']
})
export class Demo11Component implements OnInit {

  myForm : FormGroup

  constructor(
    private _builder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.myForm = this._builder.group({
      myControl1 : [null, [this.Min6char(), Validators.required ]],
      myControl2 : [null, [MinLengthValidators(10), Validators.required ]],
    })
  }

  Min6char() : ValidatorFn | null {
    return (control : FormControl) => {
      let myValue : string = control.value
      if(control.value == null) return null;
      if(myValue.length < 6) return {TropCourtError : "Le champ doit contenir au moins 6 caractères"}
      return null;
    }
  }

}

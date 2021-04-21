import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Article } from 'src/app/exercices/component/exo3/models/article.model';
import { MinLengthValidators } from 'src/app/shared/validators/MinLengthValidator';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrls: ['./demo10.component.scss']
})
export class Demo10Component implements OnInit {

  myForm : FormGroup

  art : Article
  constructor(
    private _formBuilder : FormBuilder,
  ) { }

  ngOnInit(): void {
    this.myForm = this._formBuilder.group(
      {
        'email' : ["test", [Validators.email, Validators.required]] ,
        'login' : [null, Validators.pattern("[A-Za-z0-9]")],
        'film' : this._formBuilder.array([])
      }
    )

    this.getArray().push(new FormControl(null,[Validators.required, MinLengthValidators(5)]))
    this.getArray().push(new FormControl(null,Validators.required))
    this.getArray().push(new FormControl(null,Validators.required))
  }

  getArray() : FormArray {
    return this.myForm.get('film') as FormArray
  }

  addControl() {
    this.getArray().push(new FormControl())
  }

  submitForm(){
    const myValues = this.myForm.value;
    console.log("email : "+ myValues["email"])
    console.log("login : "+ myValues["login"])

    let myArrayValues = myValues["film"]
    for(let i = 0; i < myArrayValues.length; i++){
      console.log(myArrayValues[i])
    }
  }

}

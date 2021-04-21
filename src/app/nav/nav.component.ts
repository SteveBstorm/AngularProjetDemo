import { Component, OnInit } from '@angular/core';
import { AuthwithSubjectService } from '../demo/component/demo16/authwith-subject.service';
import { DemoRoutingModule } from '../demo/demo-routing.module';
import { Link } from './Link'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  //isAuth : boolean

  listeLien : Link[]
  constructor(
    //private _auth : AuthwithSubjectService
  ) { }

  ngOnInit(): void {
    //this._auth.mySubject.subscribe((x : boolean) => this.isAuth = x)

    this.listeLien = [
      {url : '/home', title: 'Home'},
      {url : '/about', title: 'About'},
      {title : "Demo", children : [
        {title : "Binding One-Way", url : "demo/demo1"},
        {title : "Binding Two-Way", url : "demo/demo2"},
        {title : "Event Binding", url : "demo/demo3"},
        {title : "Attribute Binding", url : "demo/demo4"},
        {title : "Les Pipes", url : "demo/demo5"},
        {title : "Component Directives", url : "demo/demo6"},
        {title : "Structural Directives", url : "demo/demo7"},
        {title : "Input/Output", url : "demo/demo8"},
        {title : "Service et injection", url : "demo/demo9"},
        {title : "Formulaires", url : "demo/demo10"},
        {title : "Custom Validator", url : "demo/demo11"},
        {title : "Routing", url : "demo/demo12"},
        {title : "Guard", url : "demo/demo13"},
        {title : "Resolver", url : "demo/demo14"},
        {title : "Session", url : "demo/demo15"},
        {title : "Observable - Subject", url : "demo/demo16"},
      ]},
      {title : "Exercice", children : [
        {title : "Chronomètre", url : "exo/exo1"},
        {title : "Shopping list", url : "exo/exo2"},
        {title : "Shopping list + service", url : "exo/exo3"},
        {title : "Liste de fan", url : "exo/exo4"},

      ]}
    ]
  }

  toggleVisible(index : number) {
    this.listeLien[index].isVisible = !this.listeLien[index].isVisible
  }

}



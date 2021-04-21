import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MalisteService {

  liste : string[] = ["pomme", "poire", "fraise"]

  constructor() { }

  getList() {
    return this.liste;
  }

  getById(index : number) : string {
    return this.liste[index]
  }
}

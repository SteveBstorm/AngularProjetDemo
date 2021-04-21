import { Injectable } from '@angular/core';
import { Article } from '../component/exo3/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppinglistService {

  liste : Article[] = []
  constructor() { }

  ajout(article : Article) : void {
    let index = this.liste.findIndex(x => x.nom == article.nom)
    if(index > -1) {
      this.add1Item(index);
    }
    else {
      this.liste.push(article)
    }
  }

  supprimer(index : number) : void {
    this.liste.splice(index, 1);
  }

  add1Item(index : number) : void {
    this.liste[index].qty++;
  }

  remove1Item(index : number) : void {
    if(this.liste[index].qty > 1){
      this.liste[index].qty--
    }
    else this.supprimer(index);
  }
}

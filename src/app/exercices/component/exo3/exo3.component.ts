import { Component, OnInit } from '@angular/core';
import { ShoppinglistService } from '../../services/shoppinglist.service';
import { Article } from './models/article.model';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

  article : string;
  liste : Article[] = []

  constructor(
    private _shoppingService : ShoppinglistService
  ) { }

  ngOnInit(): void {
    this.liste = this._shoppingService.liste;
  }

  ajout() : void {
    const article = new Article();
    article.nom = this.article;
    this._shoppingService.ajout(article);
    //this.liste = this._shoppingService.liste;
  }

  supprimer(index : number) : void {
    this._shoppingService.supprimer(index)
    //this.liste = this._shoppingService.liste;
  }

  addQuantite(index : number) : void {
    this._shoppingService.add1Item(index);
    //this.liste = this._shoppingService.liste;
  }

  removeQuantite(index : number) : void {
    this._shoppingService.remove1Item(index);
    //this.liste = this._shoppingService.liste;
  }
}

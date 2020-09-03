import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredents: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Oranges',8)
  ]
  constructor() { }

  ngOnInit(): void {
  }

  onIngredentsAdded(ingredient: Ingredient) {
    this.ingredents.push(ingredient);
  }
}

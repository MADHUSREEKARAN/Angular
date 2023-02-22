import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', '10'),
    new Ingredient('Mangoes', '20')
  ]
  addIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient)
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  recipes : Recipe[]  = [
    new Recipe('Test', 'Test', 'data:image/jpeg;base64,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')
    , new Recipe('Test', 'Test', 'data:image/jpeg;base64,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')
  ];

  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}

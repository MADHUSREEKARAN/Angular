import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
    selector : "recipes",
    templateUrl : "recipes.component.html"
})
export class RecipesComponent{
    selectedRecipe! : Recipe;

    constructor(){
    }
}
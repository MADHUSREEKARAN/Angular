import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";

@NgModule({
    declarations: [
        AppComponent,
        RecipesComponent,
        ShoppingListComponent,
        HeaderComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        ShoppingListComponent,
        ShoppingEditComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
    ]
})
export class AppModule { }

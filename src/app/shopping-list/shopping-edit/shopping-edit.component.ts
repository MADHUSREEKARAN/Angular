import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef! : ElementRef
  @ViewChild('amountInput') amountInputRef! : ElementRef
  @Output() ingredientAdded = new EventEmitter<Ingredient>()
  @Output() ingredientRemoved = new EventEmitter<Ingredient>()
  newIngredient! : Ingredient 
  addElement(){
    const ingname = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value
    const newIngredient = new Ingredient(ingname, ingAmount)
    this.ingredientAdded.emit(newIngredient)
  }
  
}

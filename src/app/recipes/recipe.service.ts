import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Recipe Name',
      'Recipe Description',
      "https://th.bing.com/th/id/OIP.pw32jlUgYhWXw4nHejvi2QHaLH?pid=ImgDet&rs=1",
      [
        new Ingredient('Meat',1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Recipe Name 1',
      'Recipe Description 1',
      "https://th.bing.com/th/id/OIP.pw32jlUgYhWXw4nHejvi2QHaLH?pid=ImgDet&rs=1",
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];
  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}

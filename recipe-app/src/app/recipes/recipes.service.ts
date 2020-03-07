import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  // ensures it can be in any component in the app
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Scnitzel',
      imageUrl: 'https://cdn.pixabay.com/photo/2018/10/28/19/44/schnitzel-3779726_960_720.jpg',
      ingredients: ['French Fries', 'Pork Meat']
    },
    {
      id: 'r2',
      title: 'Mexican Salad',
      imageUrl: 'https://cdn.pixabay.com/photo/2019/10/25/00/09/guacamole-4575647_960_720.jpg',
      ingredients: ['Avocado', 'Tomato']
    }
  ];

  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe( recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }
} 

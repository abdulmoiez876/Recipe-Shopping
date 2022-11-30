import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe: Recipe = {
    name: '',
    description: '',
    imagePath: ''
  }
  recipeSelected: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected = true;
    this.recipe.description = recipe.description;
    this.recipe.imagePath = recipe.imagePath;
    this.recipe.description = recipe.description;
  }

}

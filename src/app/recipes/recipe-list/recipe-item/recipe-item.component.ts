import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe = {name: '', description: '', imagePath: ''};
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.selectedRecipe.emit({
      name: this.recipe.name,
      description: this.recipe.description,
      imagePath: this.recipe.imagePath
    })
  }

}

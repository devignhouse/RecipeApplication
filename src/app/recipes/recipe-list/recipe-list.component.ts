import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Recipe Name', 'Recipe Description', "https://th.bing.com/th/id/OIP.pw32jlUgYhWXw4nHejvi2QHaLH?pid=ImgDet&rs=1"),
    new Recipe('Recipe Name 1', 'Recipe Description 1', "https://th.bing.com/th/id/OIP.pw32jlUgYhWXw4nHejvi2QHaLH?pid=ImgDet&rs=1"),
    new Recipe('Recipe Name 2', 'Recipe Description 2', "https://th.bing.com/th/id/OIP.pw32jlUgYhWXw4nHejvi2QHaLH?pid=ImgDet&rs=1")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

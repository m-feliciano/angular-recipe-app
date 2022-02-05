import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.module";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe','Some description','https://bit.ly/3rtAEi7')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}

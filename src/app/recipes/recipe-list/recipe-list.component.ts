import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test Recipe','this is a test','http://www.lifeberrys.com/img/article/bachi-roti-ka-poha-1585482943-lb.jpg'),
    new Recipe('A second Recipe','this is a test','https://production-500eco.s3.amazonaws.com/uploads/photo/image/118/large_leftover-recipe.JPG')

  ];
  constructor() { }

  ngOnInit(): void {
  }

}

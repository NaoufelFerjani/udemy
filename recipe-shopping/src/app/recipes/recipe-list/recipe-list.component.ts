import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Chicken Parmesan',
      'A classic Italian dish, this is a hearty and flavorful meal',
      'https://tastesbetterfromscratch.com/wp-content/uploads/2023/03/Chicken-Parmesan-1.jpg'
    ),
    new Recipe(
      'Zucchini Noodles with Tomato Sauce',
      "It's like pasta but made out",
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/5/0/RX-FNM_050111-WN-Dinners-008_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382539886302.jpeg'
    ),
  ];
  constructor() {}
}

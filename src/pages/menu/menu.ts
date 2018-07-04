import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController) {

  }

  selectedTab: string = 'Drinks';

  allDrinks:any[] = [
    {name: 'Iced Coffee',
     prices: ['2.50', '3.00', '3.50']}
  ];

  allSalads: any[] = [{
    name: 'TERRAZU’S house salad',
    description: 'Ripe beefsteak tomato, avocado, hearts of palm, cucumber,'+ 
    'celery, shredded Fontina cheese  and hardboiled egg with our house dressing,' +
    'a peppery tarragon vinaigrette on chopped romaine.',
    price: '$8.65, add 2 oz. grilled chicken + $3.00',
    clicked: false
  },
  {
    name: 'TERRAZU SHRIMP SALAD',
    description : 'Fresh bibb lettuce topped with spicy boiled shrimp, '+
    'hearts of palm, fresh diced tomato and avocado; served with our '+
    'tarragon vinaigrette dressing. (Eat Fit NOLA version served with 1.5oz dressing, no pita croutons)',
    price: '$10.79',
    clicked: false
  },
  {
    name: 'Chicken Spinach Salad',
    description: 'Diced grilled chicken breast, with sundried cranberries, avocado, '+
    'toasted pecans and crumbled blue cheese on top of fresh baby spinach served with '+
    'our pepper jelly vinaigrette.',
    price: '$10.70',
    clicked: false
  },
  {
    name: 'Cobb Salad',
    description: 'Baby greens topped with sliced egg, tomato, avocado, chicken breast, '+
    'bacon and blue cheese served with homemade Garlic Ranch.',
    price: '$10.75',
    clicked: false
  },
  {
    name: 'MANDARIN SALAD',
    description: 'Mandarin oranges, grilled chicken breast, avocado, honey roasted peanuts, '+
    'roasted red pepper over a bed of mixed greens with sesame ginger dressing. '+
    '(Eat Fit NOLA version served with 1.5oz dressing, no pita croutons)',
    price: '$10.75',
    clicked: false
  },
  {
    name: 'VITA BLUE or RED (give your Heart a boost!)  ',
    description: 'A high antioxidant blend of baby greens & spinach with fresh blueberries'+
    ' or strawberries, sliced almonds, avocado & goat cheese served with our homemade balsamic vinaigrette.'+
    '(Eat Fit NOLA version with 1.5oz dressing, no pita croutons)',
    price: '$9.95',
    clicked: false
  },
  {
    name: 'THE TERRAZU SCOOP',
    description: 'A bed of mixed greens sliced red onion, tomato, and cucumber topped with a '+
    'generous scoop of your favorite Terrazu chicken or tuna salads; creole shrimp salad or garlic '+
    'hummus.',
    price: '$9.10',
    clicked: false
  },
  {
    name: 'BUFFALO CHICKEN',
    description: 'Chopped Romaine with blue cheese crumbles, bacon, celery, diced tomatoes, '+
    'topped with French fried onions and grilled chicken breast tossed in a spicy buffalo wing '+
    'sauce, & garlic ranch dressing.',
    price: '$10.45',
    clicked: false
  },];

}

export interface Salad {
  name: string;
  description: string;
  price: string;
  clicked: boolean;
}

  
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

  constructor(public navCtrl: NavController) {

  }

  selectedTab: string = 'Beverages';
  showExtraInfo: boolean = false;

  allDrinks:any[] = [
    {name: 'Iced Coffee',
     prices: ['2.50', '3.00', '3.50']}
  ];

  allSoups: any[] = [
    {
      name: 'Soup and Salad',
      description: 'Today’s soup with your choice of any smaller salad or Terrazu’s sesame-ginger coleslaw.',
      price: '',
      clicked: false
    },
    {
      name: 'Soup and Sandwich',
      description: 'Today’s soup with a half of any sandwich.',
      price: '',
      clicked: false
    }
];

  allSalads: any[] = [{
    name: 'Terrazu’s House Salad',
    description: 'Ripe beefsteak tomato, avocado, hearts of palm, cucumber,'+ 
    'celery, shredded Fontina cheese  and hardboiled egg with our house dressing,' +
    'a peppery tarragon vinaigrette on chopped romaine.',
    price: '$8.65, add 2 oz. grilled chicken + $3.00',
    clicked: false
  },
  {
    name: "Terrazu's Shrimp Salad",
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
    name: 'Mandarin Salad',
    description: 'Mandarin oranges, grilled chicken breast, avocado, honey roasted peanuts, '+
    'roasted red pepper over a bed of mixed greens with sesame ginger dressing. '+
    '(Eat Fit NOLA version served with 1.5oz dressing, no pita croutons)',
    price: '$10.75',
    clicked: false
  },
  {
    name: 'Vita Blue or Red (give your Heart a boost!)  ',
    description: 'A high antioxidant blend of baby greens & spinach with fresh blueberries'+
    ' or strawberries, sliced almonds, avocado & goat cheese served with our homemade balsamic vinaigrette.'+
    '(Eat Fit NOLA version with 1.5oz dressing, no pita croutons)',
    price: '$9.95',
    clicked: false
  },
  {
    name: 'The Terrazu Scoop',
    description: 'A bed of mixed greens sliced red onion, tomato, and cucumber topped with a '+
    'generous scoop of your favorite Terrazu chicken or tuna salads; creole shrimp salad or garlic '+
    'hummus.',
    price: '$9.10',
    clicked: false
  },
  {
    name: 'Buffalo Chicken',
    description: 'Chopped Romaine with blue cheese crumbles, bacon, celery, diced tomatoes, '+
    'topped with French fried onions and grilled chicken breast tossed in a spicy buffalo wing '+
    'sauce, & garlic ranch dressing.',
    price: '$10.45',
    clicked: false
  },
  {
    name: 'Bento Box',
    description: 'Grab and Go!, a healthy lunch!  Choose from our selection of '+
    'QUICK salads Chicken, Tuna, Creole Shrimp Salad or Hummus. Served with fresh fruit, '+
    'cheese and pita croutons.',
    price: '$8.40',
    clicked: false
  }];

  allSandwiches: any[] = [
    {name: 'The East Coast',
    description: 'Honey smoked turkey with Avocado, Brie cheese, house made orange cranberry relish with baby spinach & kale mix on TOASTED local  WildFlour multi grain bread.',
    price: '$11.00',
    clicked: false},

    {name: 'The West Coast',
    description: 'Locally made Mona’s whole wheat pita bread stuffed with honey smoked turkey breast, swiss cheese, tomato, avocado, cucumber, baby greens, and a mayo/dijon spread.',
    price: '$10.75',
    clicked: false},

    {name: 'Fontina Press',
    description: 'Honey smoked turkey, bacon, fontina cheese, sliced tomatoes, fresh spinach and basil pesto mayo pressed on locally baked WildFlour multi grain bread.',
    price: '$10.74',
    clicked: false},

    {name: 'Brie Cheese Press',
    description: 'Honey smoked turkey, brie cheese, spicy raspberry spread and baby'+
    ' spinach pressed on Mona’s whole wheat pita bread.',
    price: '$10.25',
    clicked: false},

    {name: 'Old Style Club',
    description: '(like it was in the beginning) between two slices of toasted bread (your choice of  white, whole wheat, multi grain or Seeded Rye) smoked turkey, and ham, applewood smoked bacon, swiss and cheddar cheese, then dressed with leaf lettuce, tomato, and a mayo/dijon spread.',
    price: '$10.70',
    clicked: false},

    {name: 'Terrazu Press',
    description: 'honey smoked turkey & ham, swiss cheese, red onion slices, salted potato chips layered in for an awesome crunch on fresh baked local  WildFlour multi grain bread; finished with a homemade buttermilk-herb mayo and pressed.',
    price: '$10.50',
    clicked: false},

    {name: 'The Wall Street',
    description: 'Slices of Hot Pastrami topped with swiss cheese, Terrazu’s **sesame ginger coleslaw,'+
     'Russian dressing, served on toasted locally made WildFlourBakery seeded Rye.',
    price: '$10.35',
    clicked: false},
    
    {name: 'BBLTA',
    description: ' Our version of a classic applewood smoked bacon, lettuce & tomato '+
    'then we add Brie cheese, avocado and a mayo/dijon spread on toasted WildFlourBakery whole wheat bread.',
    price: '$9.80',
    clicked: false},

    {name: 'Roast Beef Melt',
    description: 'Medium Rare Roast Beef on a French baguette with red onions, melted Swiss cheese, mayo & spicy Dijon.',
    price: '$10.79',
    clicked: false},

    {name: 'The House Special',
    description: 'Terrazu’s chicken salad on your choice of sliced bread topped with crisp bacon,'+
    ' avocado, lettuce & tomato. (Eat Fit NOLA version on whole wheat bread, one slice of bacon with slaw)',
    price: '$9.58',
    clicked: false},

    {name: 'HOLA NOLA Chicken',
    description: 'locally made “HOLA NOLA” whole wheat  tortilla wrap, grilled chicken, '+
    'applewood smoked bacon & melted fontina cheese, avocado, chopped romaine & fresh tomato with our house made cilantro lime spread.(EatFitNOLA version: 1/2oz. cheese, slaw in place of chips)',
    price: '$10.61',
    clicked: false},

    {name: 'The Bistro',
    description: 'Grilled chicken breast, fresh Mozzarella, sliced tomato, mixed greens, '+
    'pesto mayo & a dash of Balsamic vinaigrette then pressed on Mona’s whole wheat pita. (EatFitNOLA version: slaw in place of chips ',
    price: '$10.34',
    clicked: false},

    {name: 'The Medi-Teranian Wrap',
    description: 'locally made “HOLA NOLA” whole wheat  tortilla wrap, garlic hummus, sliced cucumber, red onion, goat cheese and mixed greens.  Served with a side of Balsamic vinaigrette for dipping.  (add honey smoked turkey or grilled chicken breast for a twist(extra cost).',
    price: '$9.50',
    clicked: false},

    {name: 'Shrimp Crunchy Roll',
    description: ' (don’t think sushi) Cool, creamy creole shrimp salad, layered with sea salt chips'+
    ' (the crunch) fresh avocado and roasted red peppers rolled into locally  made Mona’s white pita bread. ',
    price: '$10.35',
    clicked: false},

    {name: 'Tuna Melt',
    description: 'Albacore white tuna salad, your choice of cheese toasted on a buttery Croissant.',
    price: '$9.35',
    clicked: false},

    {name: 'Deli Style',
    description: 'Your choice of meat, cheese and bread from the lists below.  Dressed with our mayo/dijon spread, green leaf  lettuce & sliced tomato.',
    price: '',
    clicked: false},
  ];
}

export interface Salad {
  name: string;
  description: string;
  price: string;
  clicked: boolean;
}

  
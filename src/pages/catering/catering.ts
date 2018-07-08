import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-catering',
  templateUrl: 'catering.html'
})
export class CateringPage {

  selectedTab: string = "Combos";
  constructor(public navCtrl: NavController, private inAppBrowser: InAppBrowser) {

  }

  options : InAppBrowserOptions = {
    location : 'yes',//Or 'no' 
    hidden : 'no', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};

  public openWithSystemBrowser(url : string){
    let target = "_system";
    this.inAppBrowser.create(url,target,this.options);
}


cateringCombos = [
  {
    name: 'Terrazu Breakfast Mix',
    description: 'Our best selection of fresh baked breakfast pastries & either a fresh cut fruit platter or a breakfast Parfait with lowfat vanilla yogurt, fresh berries & granola.',
    price: '$8.25 pp',
    clicked: false
  },
  {
    name: 'Terrazu Bagel Breakfast',
    description: 'A varied selection of fresh baked bagels, served with butter, jams & cream cheese.',
    price: '$5.45 pp',
    clicked: false
  },
  {
    name: 'Croisant & Danish Assortment',
    description: 'Assorted filled croissants, butter croissants & danishes.',
    price: '$5.45 pp',
    clicked: false
  },
  {
    name: 'Terrazu Crowd Pleaser',
    description: 'Assortment of bagels, muffins, croissants, breakfast breads & danishes.',
    price: '$5.45 pp',
    clicked: false
  },
  {
    name: 'Terrazu Coffee Service',
    description: 'Select your favorite coffee, we’ll brew it fresh & serve it hot with all of the essentials.',
    price: '$23.50 per carafe (serves 10-12)',
    clicked: false
  },
  {
    name: 'Mid-Day Eye Opener',
    description: 'Keep them alert during your afternoon meeting with a carafe of our house blend coffee (fresh brewed or iced) and a nice assortment of sweets.',
    price: '$7.15 pp',
    clicked: false
  },
  {
    name: 'Essential Lunch Combo',
    description: 'The best deal, a platter of our classic deli style sandwiches paired with our house salad and an assortment of sweets and chips.',
    price: '$15.50 pp',
    clicked: false
  },
  {
    name: 'Deli Sandwich Platter',
    description: 'The basics are covered here with an assortment consisting of smoked turkey, smoked ham, med. rare roast beef, chicken salad & tuna salad, dressed with mayo, Dijon, lettuce & tomato on an assortment of fresh baked breads and served with chips or terrazu slaw.',
    price: '$11.50 pp',
    clicked: false
  },
  {
    name: 'Premium Sandwich Platter',
    description: 'Combines an assortment of our specialty sandwiches such as theOld Style Club, the BBLTA, the West Coast, House Special(chicken salad), Shrimp Crunchy Roll,'+
    'the Medditarian Wrap,  and the Sundried Pesto Chicken served with chips or terrazu slaw.',
    price: '$12.95 pp',
    clicked: false
  },

  {
    name: 'Sweets',
    description: 'We’ll mix up an assortment or you can customize it as you wish (call ahead to verify availability)'+
    'fudge walnut brownies, cream cheese brownies, fresh baked cookies (chocolate chip, oatmeal raisin, sugar,peanut butter), fresh baked breads, almondine bars.',
    price: '$3.25 pp',
    clicked: false
  },

  {
    name: 'Beverages',
    description: 'Iced teas (traditional & herbal fruit teas available) - $18/gal.' + '\n' + 'Assorted canned drinks include: Coca Cola, Diet Coke,  Sprite, Spring Water & ass’t. bottled juices - $2.25 pp.',
    price: '',
    clicked: false
  },
  
];

}

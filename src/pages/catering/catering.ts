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

}

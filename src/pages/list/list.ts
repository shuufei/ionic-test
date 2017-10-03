import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'list',
  segment: 'list'
})
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  // items: any[];
  items: any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i = 0; i < 10; i++) {
      this.items.push({
        id: i,
        title: `title${i}`,
        content: `content${i}`
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  navigateToItemDetail(itemId) {
    console.log(itemId);
    this.navCtrl.push('item', {
      'id': itemId
    });
  }

}

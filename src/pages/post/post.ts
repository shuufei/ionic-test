import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'post',
  segment: 'posts'
})
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController
  ) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PostPage');
  }

  closeModal() {
    // TODO: add method that remove class name to homeCtrl.
    let el = document.getElementsByClassName('home-page')[0];
    el.classList.remove('to-go-back');
    this.viewCtrl.dismiss();
  }

}

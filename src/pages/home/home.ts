import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SlideMenuComponent } from '../../components/slide-menu/slide-menu';
// import 'web-animations-js/web-animations.min';

@IonicPage({
  name: 'home',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class HomePage {
  state: string;
  menuState: string;
  list: Array<number>;
  slideMenus: Array<SlideMenuComponent>;
  isOpacity = true;
  // slide: SlideMenuComponent;
  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    this.state = 'inactive';
    // this.menuState = 'active';
    this.menuState = 'void';
    this.list = [0, 1, 2];
    this.slideMenus = [new SlideMenuComponent(), new SlideMenuComponent()];
    // this.slideMenus = [this.slide, this.slide, this.slide];
  }

  ionViewWillLeave() {
    this.isOpacity = true;
    console.log('=== ion viw will leave ===');
  }

  navigate2MyPage() {
    this.navCtrl.push('my');
  }

  navigate2ListPage() {
    this.navCtrl.push('list');
  }

  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }

  toggleMenu() {
    // this.menuState = this.menuState === 'active' ? 'inactive' : 'active';
    // this.menuState = this.menuState === 'void' ? 'in' : 'void';
    this.slideMenus = [new SlideMenuComponent(), new SlideMenuComponent()];
  }

  clickEvent() {
    console.log('=== click ===')
  }

  navigateToPostPage() {
    console.log('=== navigate to post page ===');
    // this.navCtrl.push('post', {}, {
    //   animate: false
    // });
    // this.navCtrl.insert(2, 'post', {}, {
    //   animate: false
    // });
    // let el = document.getElementById('home-page');
    let el = document.getElementsByClassName('home-page')[0];
    console.log(el);
    el.classList.add('to-go-back');
    let postModal = this.modalCtrl.create('post', {}, {});
    postModal.onDidDismiss(data => {
      // el.classList.remove('to-go-back');
    });
    postModal.present();
  }

  navigateToSlidePage() {
    this.navCtrl.push('slide');
  }
}

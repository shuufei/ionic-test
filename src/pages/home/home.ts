import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { SlideMenuComponent } from '../../components/slide-menu/slide-menu';

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
  states: Array<SlideMenuComponent>;
  // slide: SlideMenuComponent;
  constructor(public navCtrl: NavController) {
    this.state = 'inactive';
    // this.menuState = 'active';
    this.menuState = 'void';
    this.list = [0, 1, 2];
    this.states = [new SlideMenuComponent(), new SlideMenuComponent()];
    // this.slideMenus = [this.slide, this.slide, this.slide];
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
    this.states = [new SlideMenuComponent(), new SlideMenuComponent()];
  }
}

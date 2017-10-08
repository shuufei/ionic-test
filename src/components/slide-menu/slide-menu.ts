import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
// import 'web-animations-js/web-animations.min';
// import { State } from './state.service';

/**
 * Generated class for the SlideMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'slide-menu',
  templateUrl: 'slide-menu.html',
  // animations: [
  //   trigger('menuState', [
  //     state('inactive', style({
  //       backgroundColor: 'rgba(0, 0, 0, 0.1)'
  //     })),
  //     state('active', style({
  //       backgroundColor: 'rgba(0, 0, 0, 0.4)'
  //     })),
  //     transition('inactive <=> active', animate('100ms ease-in'))
  //   ])
  // ]
  animations: [
    trigger('shrinkOut', [
      state('void', style({height: 0})),
      state('in', style({height: '*'})),
      transition('* => void', [
        style({height: '*'}),
        animate(250, style({height: 0}))
      ])
    ])
  ]
})
export class SlideMenuComponent {

  text: string;
  // state: string;
  @Input('isOpen') state: string;
  // state: State;

  // @Input() state: State;

  constructor() {
    // console.log('Hello SlideMenuComponent Component');
    this.text = 'Hello World';
    this.state = 'in';
    // console.log(this.state);
  }

  toggleState() {
    console.log('=== touchstart ===');
    this.state = this.state === 'void' ? 'in' : 'void';
  }

}

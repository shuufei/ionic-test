import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { SlideMenuComponent } from '../../components/slide-menu/slide-menu';

@NgModule({
  declarations: [
    HomePage,
    SlideMenuComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}

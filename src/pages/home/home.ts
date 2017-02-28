import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {ProfilePage} from '../profile/profile';//added
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.navCtrl.push(ProfilePage);  //added
  }

}

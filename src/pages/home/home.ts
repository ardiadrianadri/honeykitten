import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignInPage } from '../sign_in/sign_in';
import { ListCatsPage } from '../list-cats/list-cats';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  public navigateSignIn() {
    this.navCtrl.push(SignInPage);
  }

  public navigateLogin() {
    this.navCtrl.push(ListCatsPage);
  }

}

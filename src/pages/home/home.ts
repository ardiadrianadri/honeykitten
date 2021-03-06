import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignInPage } from '../sign_in/sign_in';
import { NavMenuPage } from '../menu-nav/menu-nav';
import { Response, UserData } from '../../common';
import { UserApi } from '../../core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user = '';
  public pwd = '';

  public errors: string[] = null;

  constructor(
    public _navCtrl: NavController,
    public _userApi: UserApi
  ) {}

  public navigateSignIn() {
    this._navCtrl.push(SignInPage);
  }

  public navigateLogin() {
    this.errors = null;
  
    this._userApi.searchUser(this.user)
    .subscribe(
      (user: UserData) => {
        if ((user) && (this.pwd === user.password)) {
          this._navCtrl.push(NavMenuPage, { session: user });
        } else {
          this.errors = ['Wrong user or password']
        }

        this.user = '';
        this.pwd = '';
      },
      (error: Response) => {
        this.errors = [error.message];
      }
    )
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignInPage } from '../sign_in/sign_in';
import { ListCatsPage } from '../list-cats/list-cats';
import { Response, UserData } from '../../common';
import { UserApi } from '../../core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user = '';
  public pwd = '';

  constructor(
    public _navCtrl: NavController,
    public _userApi: UserApi
  ) {}

  public navigateSignIn() {
    this._navCtrl.push(SignInPage);
  }

  public navigateLogin() {
    this._userApi.searchUser(this.user)
    .subscribe(
      (user: UserData) => {
        if ((user) && (this.pwd === user.password)) {
          this._navCtrl.push(ListCatsPage, user);
        }
      },
      (error: Response) => {
        console.log(error);
      }
    )
  }

}

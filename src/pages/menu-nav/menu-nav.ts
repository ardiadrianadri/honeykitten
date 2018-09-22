import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ListCatsPage } from '../list-cats/list-cats';
import { Response, UserData } from '../../common';
import { UserApi } from '../../core';

@Component({
    selector: 'nav-menu',
    templateUrl: 'menu-nav.html'
})
export class NavMenuPage {

    public rootPage = ListCatsPage;
    public user: UserData;

    constructor(
        private _nav: NavController,
        private _navParams: NavParams,
        private _userApi: UserApi
    ) { }

    ionViewWillEnter() {
        this.user = this._navParams.get('session');
        this._userApi.startSession(this.user)
        .subscribe(
            () => {},
            (error: Response) => { throw new Error(error.message); }
        );
    }

    public logOut() {
        this._userApi.closeSession()
        .subscribe(
            () => {
                this._nav.pop();
            },
            (error: Response) => { throw new Error(error.message); }
        );
    }
}

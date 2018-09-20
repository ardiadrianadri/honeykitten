import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

import { UserData, Response } from '../common';

@Injectable()
export class UserApi {

    constructor (private _storage: Storage) {}

    public createUser(user: UserData): Observable<Response> {
        return Observable.fromPromise(this._storage.set(user.username, user))
        .pipe(
            map(() => {
                const response: Response = {
                    success: true,
                    message: `The user ${user.username} has been created`
                }
                return response;
            }),
            catchError((error: any) => {
                const response: Response = {
                    success: false,
                    message: error.message || error
                }

                return Observable.throw(response);
            })
        );
    }

    public searchUser(username: string): Observable<UserData> {
        return Observable.fromPromise(this._storage.get(username))
        .pipe(
            catchError((error: any) => {
                let response: Response = {
                    success: false,
                    message: `It was not possible to retrieve the user ${username}: ${error.message || error}`
                }

                return Observable.throw(response);
            })
        );
    }
}
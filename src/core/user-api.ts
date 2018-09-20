import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

import { UserData, Response } from '../common';

@Injectable()
export class UserApi {

    private static SESSION = 'session';

    constructor (private _storage: Storage) {}

    public createUser(user: UserData): Observable<Response> {
        return Observable.fromPromise(this._storage.set(user.username, user))
        .pipe(
            map(() => {
                return {
                    success: true,
                    message: `The user ${user.username} has been created`
                };
            }),
            catchError((error: any) => {
                return Observable.throw({
                    success: false,
                    message: error.message || error
                });
            })
        );
    }

    public searchUser(username: string): Observable<UserData> {
        return Observable.fromPromise(this._storage.get(username))
        .pipe(
            catchError((error: any) => {
                return Observable.throw({
                    success: false,
                    message: `It was not possible to retrieve the user ${username}: ${error.message || error}`
                });
            })
        );
    }

    public startSession(user: UserData): Observable<Response> {
        return Observable.fromPromise(this._storage.set(UserApi.SESSION, user))
        .pipe(
            map(() => {
                return {
                    success: true,
                    message: `Session started for user ${user.username}`
                }
            }),
            catchError((error: any) => {
                return Observable.throw({
                    success: false,
                    message: error.message || error
                });
            })
        );
    }

    public closeSession(): Observable<Response> {
        return Observable.fromPromise(this._storage.remove(UserApi.SESSION))
        .pipe(
            map(() => {
                return {
                    success: true,
                    message: 'Session closed'
                }
            }),
            catchError ((error: any) => {
                return Observable.throw({
                    success: false,
                    message: error.message || error
                })
            })
        );
    }
}
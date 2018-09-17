import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CatData } from '../../common';

@Injectable()
export class CatService {
    private static URL = '/assets/data-cats.json';

    constructor( private _http: HttpClient) {}

    public getDataCat(index: number): Observable<CatData> {
        return this._http.get(CatService.URL)
        .pipe(
            map((catArray: CatData[]) => {
                const leng = catArray.length;
                const realIndex = ((index < 0) ? leng + index : index) % leng;
                return catArray[realIndex];
            })
        );
    }
}
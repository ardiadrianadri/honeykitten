import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { CatService } from '../../core';
import { CatData } from '../../common';

@Component({
    selector: 'list-cats',
    templateUrl: 'list-cats.html',
})
export class ListCatsPage implements OnInit {

    public catInfo$: Observable<CatData>;

    private _currentCat = 0;

    constructor(private _service: CatService) {}

    ngOnInit() {
        this.catInfo$ = this._service.getDataCat(this._currentCat);
    }

    public changeCat(event: any) {
        if (event.direction === 2) {
            this.catInfo$ = this._service.getDataCat(++this._currentCat);
        } else {
            this.catInfo$ = this._service.getDataCat(--this._currentCat);
        }
    }
}

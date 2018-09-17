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

    constructor(private _service: CatService) {}

    ngOnInit() {
        this.catInfo$ = this._service.getDataCat(0);
    }
}

import { Component, Input, OnChanges } from '@angular/core';

import { CatData } from '../../common';

@Component({
    selector: 'card-cat',
    templateUrl: 'card.html'
})
export class CardComponent implements OnChanges {
    @Input()
    public catData: CatData;

    ngOnChanges() {
        console.log(this.catData);
    }
}

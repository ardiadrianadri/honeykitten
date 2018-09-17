import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CatData } from '../../common';

@Component({
    selector: 'card-cat',
    templateUrl: 'card.html'
})
export class CardComponent {
    @Input()
    public catData: CatData;

    @Output()
    public changeCatEvent: EventEmitter<any> = new EventEmitter<any>();

    public changeCat (event: any) {
        this.changeCatEvent.emit(event);
    }
}

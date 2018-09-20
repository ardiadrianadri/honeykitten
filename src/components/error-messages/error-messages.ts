import { Component, Input } from '@angular/core';

@Component({
    selector: 'errors-display',
    templateUrl: 'error-messages.html'
})
export class ErrorMessagesComponent {

    @Input()
    public errors: string[] = null;

    constructor() { }
}

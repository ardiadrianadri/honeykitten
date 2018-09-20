import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CatService } from './cat-api';
import { UserApi } from './user-api';

@NgModule({
    imports: [ CommonModule, HttpClientModule ],
    providers: [ CatService, UserApi ],
})
export class CoreModule {
    constructor (@Optional() @SkipSelf() parent: CoreModule) {
        if (parent) {
            throw new Error('Error: CoreModule only can be injected once');
        }
    }
}
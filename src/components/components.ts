import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { CardComponent } from './card/card';
import { ErrorMessagesComponent } from './error-messages/error-messages';

const exportComponents = [
    CardComponent,
    ErrorMessagesComponent
];
@NgModule({
    declarations: [ ...exportComponents ],
    imports: [ CommonModule, IonicModule ],
    exports: [ ...exportComponents ]
})
export class ComponentsModule {}
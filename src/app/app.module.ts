import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { ComponentsModule } from '../components';
import { CoreModule } from '../core';
import {
  HomePage,
  SignInPage,
  ListCatsPage
} from '../pages';

export const pages = [ ListCatsPage, HomePage, SignInPage, MyApp ];

@NgModule({
  declarations: [...pages],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    CoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [...pages],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

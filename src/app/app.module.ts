import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { YouTubeApiProvider } from '../providers/you-tube-api/you-tube-api';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { AddPlaylistPage } from '../pages/add-playlist/add-playlist';
import { ViewPlaylistPage } from '../pages/view-playlist/view-playlist';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddPlaylistPage,
    ViewPlaylistPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddPlaylistPage,
    ViewPlaylistPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    YouTubeApiProvider
  ]
})
export class AppModule {}

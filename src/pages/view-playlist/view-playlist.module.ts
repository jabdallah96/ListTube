import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPlaylistPage } from './view-playlist';

@NgModule({
  declarations: [
    ViewPlaylistPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewPlaylistPage),
  ],
})
export class ViewPlaylistPageModule {}

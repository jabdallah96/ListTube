import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPlaylistPage } from './edit-playlist';

@NgModule({
  declarations: [
    EditPlaylistPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPlaylistPage),
  ],
})
export class EditPlaylistPageModule {}

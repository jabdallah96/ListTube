import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage/dist/storage';
import { PlaylistModel } from '../../app/models/play-list-model';

@Component({
  selector: 'page-view-playlist',
  templateUrl: 'view-playlist.html',
})

/*
  A page for viewing an individual playlist and the videos contained in it.
*/

export class ViewPlaylistPage {
  selectedItem: any;
  icons: string[];
  playlist: PlaylistModel;

  constructor(public navCtrl: NavController, public params: NavParams, private storage: Storage) {
    this.playlist = this.params.get("1");
  }

  /*
    Deletes the video from the playlist array, while calling the storage update function.
  */

  deleteVideo(id:string) {
    let index = this.playlist.videos.findIndex(video=>video.id==id);
    this.playlist.videos.forEach(video => {
         if(video.id == id) {
           this.playlist.videos.splice(index,1);
         }
    });
    this.updateStorage();
  }

  /*
    Updates the storage by replacing the old playlist with the modified one.
  */

  updateStorage(){
    this.storage.set(this.playlist.name,this.playlist);
  }

}

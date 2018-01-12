import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage/dist/storage';
import { PlaylistModel } from '../../app/models/play-list-model';

@Component({
  selector: 'page-view-playlist',
  templateUrl: 'view-playlist.html',
})
export class ViewPlaylistPage {
  selectedItem: any;
  icons: string[];
  playlist: PlaylistModel;

  constructor(public navCtrl: NavController, public params: NavParams, private storage: Storage) {
    this.playlist = this.params.get("1");
    console.log(this.params.get("1"));
    console.log("Test");
  }

  deleteVideo(id:string) {
    console.log(this.playlist.name);
      let index = this.playlist.videos.findIndex(video=>video.id==id);
      this.playlist.videos.forEach(video => {
          if(video.id == id) {
            this.playlist.videos.splice(index,1);
          }
      });
    this.updateStorage();
  }

  updateStorage(){
    this.storage.set(this.playlist.name,this.playlist);
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VideoModel } from '../../app/models/video-model';
import { Storage } from '@ionic/storage';
import { PlaylistModel } from '../../app/models/play-list-model';
import { ViewPlaylistPage } from '../view-playlist/view-playlist';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  playlists: PlaylistModel[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage) {
    this.playlists = [];
    this.storage.forEach((value: PlaylistModel, key, index) => {
      this.playlists.push(value);
    });
  }

  loadPlaylist(playlist:PlaylistModel){
    console.log(playlist);
    this.navCtrl.push(ViewPlaylistPage, {1 : playlist});
  }

  deletePlaylist(name:string) {
    let index = this.playlists.findIndex(playlist=>playlist.name==name);
    this.playlists.forEach(playlist => {
      if(playlist.name == name) {
        this.playlists.splice(index,1);
      }
    });
    this.storage.remove(name);
  }

}

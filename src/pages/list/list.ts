import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VideoModel } from '../../app/models/video-model';
import { Storage } from '@ionic/storage';
import { PlaylistModel } from '../../app/models/play-list-model';
import { ViewPlaylistPage } from '../view-playlist/view-playlist';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { EditPlaylistPage } from '../edit-playlist/edit-playlist';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})

/*
  Page for listing all the user's playlists, while allowing the editing and removal of each playlist.
*/
export class ListPage {
  selectedItem: any;
  icons: string[];
  playlists: PlaylistModel[];

  /*
    Constructor loads all the data from the storage into a playlist array.
  */

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage, public modalCtrl: ModalController) {
    this.playlists = [];
    this.storage.forEach((value: PlaylistModel, key, index) => {
      this.playlists.push(value);
    });
  }


  /*
    Takes the user to the individual view of the playlist chosen.
  */

  loadPlaylist(playlist:PlaylistModel){
    this.navCtrl.push(ViewPlaylistPage, {1 : playlist});
  }

  /*
    Removes a playlist from the storage as well as the observable results.
  */

  deletePlaylist(name:string) {
    let index = this.playlists.findIndex(playlist=>playlist.name==name);
    this.playlists.forEach(playlist => {
      if(playlist.name == name) {
        this.playlists.splice(index,1);
      }
    });
    this.storage.remove(name);
  }

  /*
    Loads the playlist editing modal while passing the playlist name.
  */

  changePlaylist(name:string){
    let playlistModal = this.modalCtrl.create(EditPlaylistPage, {1 : name});
    playlistModal.onDidDismiss(data => {
      this.playlists = [];
      this.storage.forEach((value: PlaylistModel, key, index) => {
        this.playlists.push(value);
      });
    });
    playlistModal.present();
  }
}

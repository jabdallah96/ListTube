import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VideoModel } from '../../app/models/video-model';
import { Storage } from '@ionic/storage';
import { PlaylistModel } from '../../app/models/play-list-model';

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

}

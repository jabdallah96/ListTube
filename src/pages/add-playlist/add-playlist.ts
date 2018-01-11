import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { VideoModel } from '../../app/models/video-model';
import { PlaylistModel } from '../../app/models/play-list-model';

/**
 * Generated class for the AddPlaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-playlist',
  templateUrl: 'add-playlist.html',
})
export class AddPlaylistPage {

  listName="";
  choice="";
  playlists: PlaylistModel[];
  private video: VideoModel;

  constructor(public viewCtrl: ViewController, private storage: Storage, private params: NavParams) {
    this.video = this.params.get("1");
    this.playlists = [];
    this.storage.forEach((value: PlaylistModel, key, index) => {
      this.playlists.push(value);
    });
    console.log(this.playlists);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPlaylistPage');
  }

  addPlaylist(){
    console.log(this.choice);
    this.storage.get(this.choice).then((val) => {
      val.videos.push(this.video);
      this.storage.set(this.choice,val);
    });

    this.viewCtrl.dismiss();
  }


  newPlaylist (name:string) {
    this.storage.set(name,new PlaylistModel(name, [this.video]));
    console.log("Saved");
    this.viewCtrl.dismiss();
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage/dist/storage';
import { PlaylistModel } from '../../app/models/play-list-model';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@IonicPage()
@Component({
  selector: 'page-edit-playlist',
  templateUrl: 'edit-playlist.html',
})
/*
  A class for handling the playlist editing modal. For the purposes of this app, the only editing functionality
  included is for changing the name of the playlist.
*/

export class EditPlaylistPage {

  playlistName: string = "";
  newName: string = "";

  /*
    Fetches the playlist name prior to user input from the parameters.
  */

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private storage: Storage) {
    this.playlistName = this.navParams.get("1");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPlaylistPage');
  }

  /*
    Changes the playlist storage data by creating a copy playlist with a new name and removing the old version.
    This method was chosen due to having the playlist name be the key in storage. Can be improved to an index
    in future versions.
  */

  changeName(){
    this.storage.get(this.playlistName).then((val)=> {
        val.name = this.newName;
        this.storage.set(this.newName,val);
      }
    );
    this.storage.remove(this.playlistName);
    this.viewCtrl.dismiss();
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}

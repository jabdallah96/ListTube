import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage/dist/storage';
import { PlaylistModel } from '../../app/models/play-list-model';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the EditPlaylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-playlist',
  templateUrl: 'edit-playlist.html',
})
export class EditPlaylistPage {

  playlistName: string = "";
  newName: string = "";

  constructor(public viewCtrl: ViewController, public navParams: NavParams, private storage: Storage) {
    this.playlistName = this.navParams.get("1");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPlaylistPage');
  }

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

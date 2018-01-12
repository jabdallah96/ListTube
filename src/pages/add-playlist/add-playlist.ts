import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { VideoModel } from '../../app/models/video-model';
import { PlaylistModel } from '../../app/models/play-list-model';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

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

  constructor(public viewCtrl: ViewController, private storage: Storage, private params: NavParams, private alertCtrl: AlertController) {
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
      console.log(val.videos.findIndex(video=>video.id==this.video.id));
      if(val.videos.findIndex(video=>video.id==this.video.id)>=0){
        let alert = this.alertCtrl.create({
          title: 'Existing Video',
          subTitle: 'This video already belongs to the chosen playlist.',
          buttons: ['Dismiss']
        });
        alert.present();
      } else{
        val.videos.push(this.video);
        this.storage.set(this.choice,val);
      }
    });

    this.viewCtrl.dismiss();
  }


  newPlaylist (name:string) {
    this.storage.get(name).then(data=>{
      if(data){
        let alert = this.alertCtrl.create({
          title: 'Existing Playlist',
          subTitle: 'There is another playlist with the same name, please choose a different one.',
          buttons: ['Dismiss']
        });
        alert.present();
      }else{
        this.storage.set(name,new PlaylistModel(name, [this.video]));
        console.log("Saved");
      }
    });
    this.viewCtrl.dismiss();
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}

import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { VideoModel } from '../../app/models/video-model';
import { PlaylistModel } from '../../app/models/play-list-model';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

/*
  Class with the role of adding videos to playlists or creating existing playlists. Both functionality are presented
  to the user from the same page. This a modal launched by the home page. 
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

  /*
    Constructor that passes the video from the search page while initializing the available playlists
  */

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

  /*
    Function that adds the chosen video to a playlist chosen by the user from a list of available options. The
    The function checks if the playlist contains the video. If the input is valid, the the video is added through
    a new playlist replica.
  */

  addPlaylist(){
    this.storage.get(this.choice).then((val) => {
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

  /*
    A function for creating new playlists. The storage is checked to see if the playlist exists. If the input is
    valid, the playlist is added to the storage with the passed video being its first input.
  */

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
      }
    });
    this.viewCtrl.dismiss();
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}

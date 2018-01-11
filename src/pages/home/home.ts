import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YouTubeApiProvider } from './../../providers/you-tube-api/you-tube-api';
import { Observable } from 'rxjs/Observable';
import { ModalController, NavParams } from 'ionic-angular';
import { AddPlaylistPage } from '../add-playlist/add-playlist';
import { VideoModel } from '../../app/models/video-model';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchTerm = "";
  searchResult: Observable<any[]>;
  nextPage: Observable<any[]>;
  pageCode;
  selectedID: any[];
  testRadioOpen: boolean;
  testRadioResult;

  constructor(public navCtrl: NavController, private youTubeProvider: YouTubeApiProvider, public modalCtrl: ModalController) {
  }

  searchVideos() {
    this.pageCode = "";
    let arrayResult = this.youTubeProvider.getSearchResults(this.searchTerm, this.pageCode);
    this.searchResult = arrayResult['videos'];
    this.nextPage = arrayResult['nextPage'];

    this.searchResult.subscribe(data => {
      console.log('results: ', data);
    }, err => {
      console.log("Error fetching results");
    })

    this.nextPage.subscribe(num => {
      this.pageCode = num;
    }, err => {
      console.log("Error fetching results");
    })

  }

  presentPlaylistModal(name, date, img, id) {
    var video = new VideoModel(name,date,img,id);
    let videoModal = this.modalCtrl.create(AddPlaylistPage, {1 : video});
    videoModal.onDidDismiss(data => {
      console.log(data);
    });
    videoModal.present();
  }
 

  

  openResults() {
    this.navCtrl.push('ResultsPage');
  }

}

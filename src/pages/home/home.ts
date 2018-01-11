import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YouTubeApiProvider } from './../../providers/you-tube-api/you-tube-api';
import { Observable } from 'rxjs/Observable';



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

  constructor(public navCtrl: NavController, private youTubeProvider: YouTubeApiProvider) {
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


  openResults() {
    this.navCtrl.push('ResultsPage');
  }

}

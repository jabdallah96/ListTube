import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


/*
  Generated class for the YouTubeApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class YouTubeApiProvider {

  url = "https://www.googleapis.com/youtube/v3";

  youtubeParam = {
    key: 'AIzaSyC9td5F-ciJtVuvAae982OFsd4G0Vd6bnc',
    maxResults: '30',
    part: 'id,snippet',
    q: '',
    type: 'video',
    order: 'relevance',
    pageToken: '',
  }


  constructor(public http: Http) {
    console.log('Hello YouTube API');
  }

  getSearchResults (q , pageToken) {

    this.youtubeParam.q = q;
    this.youtubeParam.pageToken = pageToken;
    let response = this.http.get(this.url+"/search", {params: this.youtubeParam});
    
    let videos =  response.map(res => 
      { return res.json()['items']}
    );

    let nextPage = response.map(res => 
      { return res.json()['nextPageToken']}
    );

    return {videos, nextPage};

  }

}

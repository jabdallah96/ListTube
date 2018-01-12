/*
    A data model of the playlist object, to be used to represent playlists for both storage reasons and programming
    logic. The playlist consists of a name and video array, but can support further parameters such as tags.
*/

import { VideoModel } from "./video-model";
import { Injectable } from "@angular/core";

@Injectable()
export class PlaylistModel {
    
    name: string; //Playlist name is the identifier, taking into consideration the redundancy of duplicate names
    videos: VideoModel[];

    constructor(name: string, videos: VideoModel[]){
        this.name = name;
        this.videos = videos;
    }
    
}
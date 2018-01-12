import { VideoModel } from "./video-model";
import { Injectable } from "@angular/core";

@Injectable()
export class PlaylistModel {
    
    name: string;
    videos: VideoModel[];

    constructor(name: string, videos: VideoModel[]){
        this.name = name;
        this.videos = videos;
    }
    
}
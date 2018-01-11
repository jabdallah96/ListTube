import { VideoModel } from "./video-model";

export class PlaylistModel {
    
    private name: string;
    private videos: VideoModel[];

    constructor(name: string, videos: VideoModel[]){
        this.name = name;
        this.videos = videos;
    }
 
}
import { Injectable } from "@angular/core";

@Injectable()
export class VideoModel {
    
    name: string;
    date: Date;
    img: string;
    id: string;

    constructor(name: string, date: Date, img: string, id:string){
        this.name = name;
        this.date = date;
        this.img = img;
        this.id = id;
    }
 
}
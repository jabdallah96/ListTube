/*
    A data model representing the video object. Used for both storage and programming logic. Further methods were
    not implemented as the parameters remained public for the goal of this application, however this model allows
    for their support. 
*/

import { Injectable } from "@angular/core";

@Injectable()
export class VideoModel {
    
    //Includes only the parameters necessary for identification and representation
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
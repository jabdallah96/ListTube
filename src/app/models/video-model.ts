export class VideoModel {
    
    private name: string;
    private date: Date;
    private img: string;
    private id: string;

    constructor(name: string, date: Date, img: string, id:string){
        this.name = name;
        this.date = date;
        this.img = img;
        this.id = id;
    }
 
}
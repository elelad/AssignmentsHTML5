//--------------Generic Media Library--------------------------
document.write("<h2>Generic Media Library</h2>");

//---------------class Declaration------------
class Media {
    constructor(private id:number, private name:string, private genre:string) {
    }

    toString():string {
        return "name: " + this.name + " id: " + this.id + " genre: " + this.genre;
    }
}
class MP3 extends Media {
    constructor(id:number, name:string, genre:string, private format:string) {
        super(id, name, genre);
    }
    toString():string {
        return super.toString() + " format: " + this.format;
    }
}
class MP4 extends Media {
    constructor(id:number, name:string, genre:string, private format:string) {
        super(id, name, genre);
    }
    toString():string {
        return super.toString() + " format: " + this.format;
    }
}
class JPG extends Media {
    constructor(id:number, name:string, genre:string, private type:string, private format:string) {
        super(id, name, genre);
    }
    toString():string {
        return super.toString() + " type: " + this.type + " format: " + this.format;
    }
}
class MediaLib<T extends Media> {
    private type:string;
    private lib:T[] = [];

    constructor(private media:T) {
        this.push(media);
        let name:string = media.constructor.toString();
        this.type = "<h4>" + name.slice(name.indexOf(" "), name.indexOf("(")) + " Library</h4>";
    }
    push(media:T):void {
        this.lib.push(media);
    }
    pop():void {
        this.lib.pop();
    }
    toString():string {
        var temp:string = this.type;
        for (let index in this.lib) {
            temp += this.lib[index].toString() + "<br>";
        }
        return temp;
    }
}

//---------media library for mp3------------
var mp3Library = new MediaLib(new MP3(1, "song1", "pop", "mp3"));
mp3Library.push(new MP3(2, "song2", "rock", "mp3"));
mp3Library.push(new MP3(3, "song3", "country", "mp3"));

//---------media library for jpg------------
var jpgLibrary = new MediaLib(new JPG(1, "pic1", "icon", "color", "jpg"));
jpgLibrary.push(new JPG(2, "pic2", "img", "blackAndWhit", "jpg"));
jpgLibrary.push(new JPG(3, "pic3", "poster", "filter", "jpg"));

//---------media library for mp4------------
var mp4Library = new MediaLib(new MP4(1, "clip1", "comedy", "mp4"));
mp4Library.push(new MP4(2, "clip2", "Movie", "mp4"));
mp4Library.push(new MP4(3, "clip3", "TV episode", "mp4"));
var allLib:MediaLib<Media>[] = [mp3Library, jpgLibrary, mp4Library];


//------------iterate and print library details
document.write("<br><h3>-------------Before Pop--------------</h3>");
allLib.forEach(str => document.write(str.toString()));
document.write("<br><h3>-------------After Pop--------------</h3>");
allLib.forEach(lib => lib.pop());
allLib.forEach(str => document.write(str.toString()));

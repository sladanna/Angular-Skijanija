export class Track {
    _id: string;
    mountain_id: string;
    name: string;
    length_km:string;
    rating: string;
    color: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || "";
        this.name = obj && obj.name || "";
        this.mountain_id = obj && obj.mountain_id || "";
        this.length_km = obj && obj.length_km || "";
        this.rating = obj && obj.rating || "";
        this.color = obj && obj.color || "";
    
    }
}
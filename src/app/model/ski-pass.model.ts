export class SkiPass {
    _id: string;
    mountain_id: string;
    duration: string;
    price: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || "";
        this.mountain_id = obj && obj.mountain_id || "";
        this.duration = obj && obj.duration || "";
        this.price = obj && obj.price || "";
    }

}
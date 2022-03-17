export class Weather {
    _id:string;
    mountain_id: string;
    date: string;
    temperature_min: string;
    temperature_max: string;
    wind: string;
    outlook: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || "";
        this.mountain_id = obj && obj.mountain_id || "";
        this.date = obj && obj.date || "";
        this.temperature_min = obj && obj.temperature_min || "";
        this.temperature_max = obj && obj.temperature_max || "";
        this.wind = obj && obj.wind || "";
        this.outlook = obj && obj.outlook || "";
    }
}
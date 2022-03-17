import { ReservationDate } from "./reservation-date.model";

export class Reservation {
    _id: number;
    mountain_id: string;
    firstName: string;
    lastName: string;
    from: ReservationDate;
    to: ReservationDate;
    price: string;

    constructor(obj?:any) {
        this._id = obj && obj._id || 0;
        this.mountain_id = obj && obj.mountain_id || "";
        this.firstName = obj && obj.firstName || "";
        this.lastName = obj && obj.lastName || "";
        this.price = obj && obj.price || "";
        this.from = obj && obj.from && new ReservationDate(obj.from) || new ReservationDate();
        this.to = obj && obj.to && new ReservationDate(obj.to) || new ReservationDate();
    }
}
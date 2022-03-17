import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Reservation } from 'src/app/model/reservation.model';
import { SkiPass } from 'src/app/model/ski-pass.model';


@Component({
  selector: 'app-ski-pass',
  templateUrl: './ski-pass.component.html',
  styleUrls: ['./ski-pass.component.css']
})
export class SkiPassComponent implements OnInit {

  @Input()
  skipases: SkiPass[] = [];
  

  @Output()
  reserve = new EventEmitter<Reservation>();

  reservation: Reservation = new Reservation();

  constructor() { }

  ngOnInit(): void {
  }

  calculatePrice() : void {
    const fromDate = new Date(this.reservation.from.year, this.reservation.from.month, this.reservation.from.day);
    const toDate = new Date(this.reservation.to.year, this.reservation.to.month, this.reservation.to.day);
    const daysBetween = Math.round((toDate.getTime() - fromDate.getTime()) / (1000*60*60*24))

    const result = this.skipases.filter((elem: SkiPass) => parseInt(elem.duration) === daysBetween);


    if(result.length > 0){
      this.reservation.price = result[0].price;
    }
    
  }

  sendReservation() : void {
    this.reserve.emit(this.reservation);
  }

}

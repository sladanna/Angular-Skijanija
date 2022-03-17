import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../model/reservation.model';
import { SkiPass } from '../model/ski-pass.model';
import { SkiResort } from '../model/skiresort.model';
import { Track } from '../model/track.model';
import { Weather } from '../model/weather.model';
import { ResortsService } from '../services/resorts.service';

@Component({
  selector: 'app-ski-resort',
  templateUrl: './ski-resort.component.html',
  styleUrls: ['./ski-resort.component.css']
})
export class SkiResortComponent implements OnInit {

  active = 1;
  skiResortId: string = "";
  skiResort: SkiResort = new SkiResort();
  tracks: Track[] = [];
  weathers: Weather[] = [];
  skiPasses: SkiPass[] = [];

  queryParams = {
    sort: ""
  }
  constructor(private route: ActivatedRoute, private service: ResortsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((data:any) => {
      this.skiResortId = data["id"];
      this.getOne();
      this.getTracks();
      this.getWeather();
      this.getSkiPasses();
    })
  }

  getOne() : void {
    this.service.getOne(this.skiResortId).subscribe((data:SkiResort) => {
      this.skiResort = data;
    })
  }

  getTracks() : void {
    this.service.getTracks(this.skiResortId, this.queryParams).subscribe((data:Track[]) => {
      this.tracks = data;
    })
  }

  onSortChange(newSort: string) : void {
    this.queryParams.sort = newSort;
    this.getTracks();
  }

  getWeather() : void {
    this.service.getWeather(this.skiResortId).subscribe((data:any) => {
      this.weathers = data;
    })
  }

  getSkiPasses() : void {
    this.service.getSkiPasses(this.skiResortId).subscribe((data: SkiPass[]) => {
      this.skiPasses = data;
    })
  }

  sendReservation(reservation: Reservation) {
    this.service.postReservation(this.skiResortId, reservation).subscribe((reservation => {
      alert("Success");
    }),error => {
      alert("Error");
    })
  }

}

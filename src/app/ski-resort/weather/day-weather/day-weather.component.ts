import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/model/weather.model';

@Component({
  selector: 'app-day-weather',
  templateUrl: './day-weather.component.html',
  styleUrls: ['./day-weather.component.css']
})
export class DayWeatherComponent implements OnInit {

  @Input()
  weather: Weather = new Weather();
  constructor() { }

  ngOnInit(): void {
  }

}

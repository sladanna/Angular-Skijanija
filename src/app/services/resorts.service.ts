import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SkiResort } from '../model/skiresort.model';
import {map} from 'rxjs/operators';
import { Track } from '../model/track.model';
import { Weather } from '../model/weather.model';
import { SkiPass } from '../model/ski-pass.model';
import { Reservation } from '../model/reservation.model';


const baseUrl = "http://localhost:3000/api/skiresorts"
@Injectable({
  providedIn: 'root'
})
export class ResortsService {

  constructor(private httpClient: HttpClient) { }

  getResorts() : Observable<SkiResort[]> {
    return this.httpClient.get(baseUrl).pipe(map((x:any) => {
      return x.map((elem:any) => new SkiResort(elem))
    }));
  }

  getOne(skiResortId: string) : Observable<SkiResort> {
    return this.httpClient.get(`${baseUrl}/${skiResortId}`).pipe(map((x:any) => {
      return new SkiResort(x);
    }))
  }
  // http://localhost:3000/api/skiresorts/0/tracks
  getTracks(skiResortId: string, params?: any) : Observable<Track[]> {
    let queryParams = {};

    if(params) {
      queryParams = {
        params: new HttpParams()
        .set("sort", params.sort || "")
      }
    }


    return this.httpClient.get(`${baseUrl}/${skiResortId}/tracks`, queryParams).pipe(map((x:any) => {
      return x.map((elem:any) => new Track(elem));
    }))
  }

  // http://localhost:3000/api/skiresorts/0/weather
  getWeather(skiResortId: string) : Observable<Weather[]> {
    return this.httpClient.get(`${baseUrl}/${skiResortId}/weather`).pipe(map((x:any) => {
      return x.map((elem:any) => new Weather(elem));
    }))
  }

 
  //http://localhost:3000/api/skiresorts/0/skipass
  getSkiPasses(skiResortId: string) : Observable<SkiPass[]> {
    return this.httpClient.get(`${baseUrl}/${skiResortId}/skipass`).pipe(map((x:any) => {
      return x.map((elem:any) => new SkiPass(elem));
    }))
  }

  postReservation(skiResortId:string, reservation: Reservation) : Observable<Reservation> {
    return this.httpClient.post(`${baseUrl}/${skiResortId}/skipass`, reservation).pipe(map((x:any) =>{
      return new Reservation(x);
    }))
  }
}
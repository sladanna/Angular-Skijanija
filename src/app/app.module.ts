import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SkiResortComponent } from './ski-resort/ski-resort.component';
import {HttpClientModule} from '@angular/common/http';
import { TracksComponent } from './ski-resort/tracks/tracks.component';
import { WeatherComponent } from './ski-resort/weather/weather.component';
import { SkiPassComponent } from './ski-resort/ski-pass/ski-pass.component';
import { FormsModule } from '@angular/forms';
import { DayWeatherComponent } from './ski-resort/weather/day-weather/day-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavBarComponent,
    SkiResortComponent,
    TracksComponent,
    WeatherComponent,
    SkiPassComponent,
    DayWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

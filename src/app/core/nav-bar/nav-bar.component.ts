import { Component, OnInit } from '@angular/core';
import { SkiResort } from 'src/app/model/skiresort.model';
import { ResortsService } from 'src/app/services/resorts.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  skiResorts: SkiResort[] = [];
  constructor(private service: ResortsService) { }

  ngOnInit(): void {
    this.getResorts();
  }

  getResorts() : void {
    this.service.getResorts().subscribe((data: SkiResort[]) => {
      this.skiResorts = data;
    })
  }

}

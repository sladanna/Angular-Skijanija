import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Track } from 'src/app/model/track.model';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  @Input()
  tracks: Track[] = [];

  sort: string = "";

  @Output()
  sortChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onChange() {
    this.sortChange.emit(this.sort);
  }

}

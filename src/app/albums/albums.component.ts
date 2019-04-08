import { Component, OnInit } from '@angular/core';
import { Album } from '../album';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
    album: Album = {
      userId: 1,
    id: 2,
    title: "Eder"
    };

  constructor() { }

  ngOnInit() {
  }

}

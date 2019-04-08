import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photo: Photo = {
    albumId: 1,
    id: 1,
    title: "Eder",
    url: "Eder",
    thumbnailUrl: "Eder"
  };

  constructor() { }

  ngOnInit() {
  }

}

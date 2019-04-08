import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post: Post = {
    userId: 1,
    id: 1,
    title: "Eder",
    body: "Eder"
  };

  constructor() { }

  ngOnInit() {
  }

}

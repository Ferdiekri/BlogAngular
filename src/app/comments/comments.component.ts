import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment: Comment = {
    postId: 1,
    id: 2,
    name: "Eder",
    email: "Eder@eder.com",
    body: "Eder"
  };

  constructor() { }

  ngOnInit() {
  }

}

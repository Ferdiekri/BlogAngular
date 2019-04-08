import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todo: Todo = {
    userId: 1,
    id: 1,
    title: "Eder",
    completed: true
  };

  constructor() { }

  ngOnInit() {
  }

}

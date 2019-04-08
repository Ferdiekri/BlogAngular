import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    id: 1,
    name: "Eder",
    username: "Ferdiekri",
    email: "equ_406@hotmail.com",
    address: {
      street: "Osasuna 1",
      suite: "6ºD",
      city: "Erandio",
      zipcode: "48950",
      geo: {
        lat: 111,
        lng: 200
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

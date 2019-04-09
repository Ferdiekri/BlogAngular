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
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
      }
    }

  constructor() { }

  ngOnInit() {
  }

}

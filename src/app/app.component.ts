import { Component, OnInit } from '@angular/core';
import { Info, User, UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-users-table';
  users: User[];

  defaultUser: User= {
    gender: "male",
    "name": {
        "title": "Mr",
        "first": "Default",
        "last": "Lemoine"
    },
    "location": {
        "street": {
            "number": 9272,
            "name": "Rue du Moulin"
        },
        "city": "Clermont-Ferrand",
        "state": "Pyrénées-Orientales",
        "country": "France",
        "postcode": 60321,
        "coordinates": {
            "latitude": "-18.5642",
            "longitude": "-104.4990"
        },
        "timezone": {
            "offset": "-4:00",
            "description": "Atlantic Time (Canada), Caracas, La Paz"
        }
    },
    "email": "johan.lemoine@example.com",
    "phone": "04-49-09-24-80",
    "picture": {
        "large": "https://randomuser.me/api/portraits/men/56.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/56.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
    }
}

  info?: Info;

  constructor(private service: UsersService) {
    this.users = [this.defaultUser];
    // this.info
  }

  ngOnInit(): void {
    this.service.getResponce()
    .subscribe((responce) => {
      this.users = responce.results
      this.info = responce.info
    })
  }
}

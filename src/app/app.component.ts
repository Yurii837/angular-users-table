import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-users-table';
  users: User[];

  fieldsFromLS = JSON.parse(localStorage.getItem('fields') || '{}')

  defaultUser: User= {
    gender: "Default",
    "name": {
        "title": "Default",
        "first": "Default",
        "last": "Default"
    },
    "location": {
        "street": {
            "number": 0,
            "name": "Default"
        },
        "city": "Default",
        "state": "Default",
        "country": "Default",
        "postcode": 0,
        "coordinates": {
            "latitude": "Default",
            "longitude": "Default"
        },
        "timezone": {
            "offset": "Default",
            "description": "Default"
        }
    },
    "email": "Default",
    "phone": "Default",
    "picture": {
        "large": "https://randomuser.me/api/portraits/men/56.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/56.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/56.jpg"
    }
}

  info?: Info;

  dataSource: DataSource;

  constructor(private service: UsersService) {
    this.users = [this.defaultUser];
    this.dataSource = new DataSource({})
  }

  filter() {
    console.log('ok')
    this.dataSource.load();
}

  ngOnInit(): void {
    this.service.getResponce()
    .subscribe((responce) => {
      this.users = responce.results
      this.info = responce.info
    })
  }

  keyDescOrder (): number {
    return 0;
  }

}

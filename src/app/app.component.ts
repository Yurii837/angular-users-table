import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import DataSource from 'devextreme/data/data_source';
import { defaultUser } from './Modes/defaultFields';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-users-table';
  users: User[];
  fieldsFromLS = JSON.parse(localStorage.getItem('fields') || '{}')
  info?: Info;
  dataSource: DataSource;

  constructor(private service: UsersService) {
    this.users = [defaultUser];
    this.dataSource = new DataSource({});
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

  filteringLocation (cellInfo: { value: string; }) {
     const arr = cellInfo.value.split(' ');
     const filtered = arr.filter(e => e && e !== '\n');
     const short = [filtered[0], filtered[1], filtered[2]];
     return short.join(', ');
  }

  filteringLocationInfo (cellInfo: string) {
    const arr = cellInfo.split(' ');
     const filtered = arr.filter(e => e && e !== '\n');
     const short = [filtered[filtered.length - 3], filtered[filtered.length - 2], filtered[filtered.length - 1]];
     return short.join(', '); 
  }
}

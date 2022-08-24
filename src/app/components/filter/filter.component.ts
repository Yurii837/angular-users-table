import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  fieldsFromLS: Fields = {};  
  

fields: Fields = {
    index: true,
    picture: true,
    gender: true,
    name: true,
    location: true,
    email: true,
    login: false,
    dob: false,
    registered: false,
    phone: true,
    cell: false,
    id: false, 
    nat: false
}

  constructor() { }

  ngOnInit(): void {
    this.fieldsFromLS = Object.keys(JSON.parse(localStorage.getItem('fields') || '{}')).length > 0
    ? JSON.parse(localStorage.getItem('fields') || '{}')
    : this.fields
    console.log(JSON.parse(localStorage.getItem('fields') || '{}'))
  }

  changeStatus(field: string) {
    this.fieldsFromLS[field] = !this.fieldsFromLS[field];
  }

  submitHandler() {
    localStorage.setItem('fields', JSON.stringify(this.fieldsFromLS))
  }

  setDefaultFields() {
    localStorage.setItem('fields', JSON.stringify(this.fields))
    localStorage.removeItem('fields')
    localStorage.clear()
  }

  keyDescOrder (): number {
    return 0;
  }
}

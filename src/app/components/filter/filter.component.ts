import { Component, OnInit } from '@angular/core';
import { fields } from 'src/app/Modes/defaultFields';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  fieldsFromLS: Fields = {};  

  constructor() {

   }

  ngOnInit(): void {
    this.fieldsFromLS = Object.keys(JSON.parse(localStorage.getItem('fields') || '{}')).length > 0
    ? JSON.parse(localStorage.getItem('fields') || '{}')
    : fields;
    localStorage.setItem('fields', JSON.stringify(this.fieldsFromLS));
  }

  changeStatus(field: string) {
    this.fieldsFromLS[field] = !this.fieldsFromLS[field];
  }

  submitHandler() {
    localStorage.setItem('fields', JSON.stringify(this.fieldsFromLS));
  }

  setDefaultFields() {
    //none of the below methods work for some reason, processing...//
    localStorage.removeItem('fields');
    window.localStorage.clear();
  }

  keyDescOrder (): number {
    return 0;
  }
}

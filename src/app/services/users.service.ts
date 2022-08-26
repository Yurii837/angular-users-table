import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { fields } from '../Modes/defaultFields';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }

  convertToHttpString(obj: Object) {
    let res = ''
    const asArray = Object.entries(obj)
    const onlyTrues = asArray.filter(([key, value]) => value === true)
    onlyTrues.forEach(item => {
        res = res + item[0] + ","
    })
    return res;
  }

  incProp = Object.keys(JSON.parse(localStorage.getItem('fields') || '{}')).length > 0 
    ? this.convertToHttpString(JSON.parse(localStorage.getItem('fields') || '{}'))
    : this.convertToHttpString(fields)

  getResponce(): Observable<ServerResponce> {
    return this.http.get<ServerResponce>(`https://randomuser.me/api/?results=100&seed=abc&inc=${this.incProp}`)
    .pipe(
      retry(3),
    )
  }
}

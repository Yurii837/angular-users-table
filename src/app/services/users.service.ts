import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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

  incProp = this.convertToHttpString(JSON.parse(localStorage.getItem('fields') || '{}'));

  getResponce(): Observable<ServerResponce> {
    return this.http.get<ServerResponce>(`https://randomuser.me/api/?results=100&seed=abc&inc=${this.incProp}`);
  }
}

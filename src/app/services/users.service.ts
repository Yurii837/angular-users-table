import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  gender: string,
  name: {
      "title"?: string,
      "first": string,
      "last": string
  },
  "location": {
      "street": {
          "number"?: number,
          "name": string
      },
      "city": string,
      "state"?: string,
      "country"?: string,
      "postcode"?: number,
      "coordinates"?: {
          "latitude": string,
          "longitude": string
      },
      "timezone"?: {
          "offset": string,
          "description": string
      }
  },
  "email": string,
  phone: string,
  picture: {
      large?: string,
      medium?: string,
      thumbnail: string
  }
}

export interface Info {
  "info": {
    "seed": string,
    "results": number,
    "page": number,
    "version": string
  }
}

type ServerResponce = {
results: User[],
info: Info
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }


  getResponce(): Observable<ServerResponce> {
    return this.http.get<ServerResponce>('https://randomuser.me/api/?page=2&results=3&seed=abc&inc=picture,name,phone,email,location,gender')
  }
}
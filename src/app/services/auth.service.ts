import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { map, catchError } from 'rxjs/operators';


@Injectable()
export class UserService {
  private API_PATH = 'http://localhost:3000/';

  constructor(private http: Http) {}

  getUser(id: string, password: string): Observable<User> {
      console.log('udje u servis', id, password)
    return this.http.get(`${this.API_PATH}users/${id}`)
      .pipe(
          map(res => res.json() || [])
        )
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/user';
import { map, catchError, switchMap, filter } from 'rxjs/operators';


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

  postUser(id: string, password: string): Observable<any> {
    return this.http.get(`${this.API_PATH}users?id=${id}`)
      .pipe(
          map(res => res.json()),
          filter(res => {
            if (res[0]) {
              console.log(res)
              alert('user already exists')
              return false
            } else {
              return true
            }
          }),
          switchMap(res => {
            return this.http.post(`${this.API_PATH}users`, {id: id, password: password, answers: [], questions: []})
          })
        )
  }

  putUser(user: User): Observable<any> {
    console.log('user za put')
    return this.http.put(`${this.API_PATH}users/${user.id}`, user)
      .pipe(
        map(() => user)
      )
  }
}

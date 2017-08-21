import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

  constructor(private _http: Http) { }
  register(user) {
      return this._http.post('/api/users', user)
      .map((response: Response) => response.json())
      .toPromise()
  }
  login(user) {
      console.log(user);
      return this._http.get(`/api/users/${user.email}`, user)
      .map((response: Response) => {
          response.json())
      }
      .toPromise()
  }
}

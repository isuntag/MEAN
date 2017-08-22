import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }
  login(user) {
      return this._http.post('/api/users', user)
      .map((response: Response) => response.json())
      .toPromise()
  }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionService {

  constructor(private _http: Http) { }
  newQuestion(question) {
      return this._http.post('/api/questions', question)
      .map((response: Response) => response.json())
      .toPromise()
  }
  getQuestions() {
      return this._http.get('/api/questions')
      .map((response: Response) => response.json())
      .toPromise()
  }
  getOneQuestion(id:string) {
      return this._http.get(`/api/questions/${id}`)
      .map((response: Response) => response.json())
      .toPromise()
  }
  newAnswer(answer) {
      return this._http.post(`/api/questions/${answer._questionID}/answers`, answer)
      .map((response: Response) => response.json())
      .toPromise()
  }
  getAnswers(id:string){
      return this._http.get(`/api/questions/${id}/answers`)
      .map((response: Response) => response.json())
      .toPromise()
  }
  like(id:string){
      return this._http.post(`/api/answers/${id}`, id)
      .map((response: Response) => response.json())
      .toPromise()
  }
  loggedIn() {
      return this._http.get('/api/users')
      .map((response: Response) => response.json())
      .toPromise();
  }
  // logout() {
  //     return this._http.get('/api/logout')
  //     .map((response: Response) => response.json())
  //     .toPromise()
  // }
}

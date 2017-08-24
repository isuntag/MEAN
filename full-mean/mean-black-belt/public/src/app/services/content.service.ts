import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ContentService {

  constructor(private _http: Http) { }
  addContent(content) {
        return this._http.post('/api/contents', content)
        .map((response: Response) => response.json())
        .toPromise()
    }
    getContents() {
      return this._http.get('/api/contents')
      .map((response: Response) => response.json())
      .toPromise()
  }
  delete(contentID) {
      return this._http.delete(`/api/contents/${contentID}`)
      .map((response: Response) => response.json())
      .toPromise()
  }
  getOneContent(contentID:string) {
      return this._http.get(`/api/contents/${contentID}`)
      .map((response: Response) => response.json())
      .toPromise()
  }
  addContentsub(contentsub, contentID){
      return this._http.post(`/api/${contentID}/addsub`, contentsub)
      .map((response: Response) => response.json())
      .toPromise()
  }
  upCount(contentsubID){
      return this._http.put(`/api/${contentsubID}`, contentsubID)
      .map((response: Response) => response.json())
      .toPromise()
  }
  deleteSub(contentsubID){
      return this._http.delete(`/api/${contentsubID}`, contentsubID)
      .map((response: Response) => response.json())
      .toPromise()
  }
}

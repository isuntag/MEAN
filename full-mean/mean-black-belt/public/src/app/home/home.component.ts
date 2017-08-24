import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ContentService } from '../services/content.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { User } from '../classes/user';
import { Content } from '../classes/content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private user: User;
    private contents: Array<Content> = [];

  constructor(private _us: UserService, private _cs: ContentService, private _router: Router) { }

  ngOnInit() {
      this._us.checkstatus()
      .then(user => this.user = user)
      .catch(err => this._router.navigateByUrl('/login'));

      this._cs.getContents()
      .then(contents => {
          this.contents = contents;
      })
      .catch(err => console.log(err));
  }

  logout() {
        this._us.logout()
        .then(response => this._router.navigateByUrl('/login'))
    }
    refreshlist(eventData){
        this._cs.getContents()
        .then(contents => {
            this.contents = contents;
        })
        .catch(err => console.log(err));
    }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private user;
  constructor(private _us: UserService, private _router: Router) { }

  ngOnInit() {
      this._us.checkstatus()
      .then(user => this.user = user)
      .catch(err => this._router.navigateByUrl('/index'))
  }

  logout() {
      this._us.logout()
      .then(response => this._router.navigateByUrl('/index'))
  }
}

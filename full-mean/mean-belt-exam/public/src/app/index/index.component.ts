import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
    user: Object = {
        name: ""
    }
    loginError="";
  constructor(private _us: UserService, private _router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
      this._us.login(this.user)
      .then(response => {
          this._router.navigateByUrl('/');
      })
      .catch(err => {this.loginError = err})
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user = {
        name: "",
    }
  constructor(private _us: UserService, private _router: Router) { }

  ngOnInit() {
      this._us.checkstatus()
      .then(user => this._router.navigateByUrl('/'))
      .catch(err => console.log(err))
  }
  login() {
      this._us.login(this.user)
      .then(data => {
          this._router.navigateByUrl('/')
      })
      .catch(err =>{
          console.log(err)
      })
  }
}

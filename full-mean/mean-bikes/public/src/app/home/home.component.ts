import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    loginuser: User = new User();

    registeruser: User = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: ""
    }

  constructor(private _us: UsersService) { }

  ngOnInit() {
  }

  login() {
      this._us.login(this.loginuser)
      .then(data => console.log('found'))
      .catch(err => console.log('error'))
  }
  register() {
    this._us.register(this.registeruser)
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }
}

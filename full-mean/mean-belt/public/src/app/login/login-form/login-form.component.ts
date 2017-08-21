import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    user: User = new User();
    currentUser = null;
    constructor() { }

    ngOnInit() {
    }
    login() {
        this.currentUser = this.user;
        console.log(this.currentUser);
        this.user = new User();
    }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UserService } from '../../user.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
    user: User = new User();
    currentUser = null;
    constructor(private _us: UserService, private _router: Router) { }

    ngOnInit() {
    }
    login() {
        this._us.login(this.user)
        .then(response => {
            this._router.navigateByUrl('/home')
        })
        .catch(err => console.warn(err));
        // this.currentUser = this.user;
        // console.log(this.currentUser);
        // this.user = new User();
    }
}

import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UserService } from '../../user.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
    user: User = new User();
    registerError = "";
  constructor(private _us: UserService, private _router: Router) { }

  ngOnInit() {
  }
  register() {
      this._us.addUser(this.user)
      .then(response => {this._router.navigateByUrl('/home')
      })
      .catch(error => {
          console.error(error);
          this.registerError = 'Error registering';
      });
    //   this.currentUser = this.user;
    //   console.log(this.currentUser);
    //   this.user = new User();
  }
}

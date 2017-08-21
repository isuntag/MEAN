import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';
import { UserService } from '../../user.service';
import { Routes, Router } from '@angular/router'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
    user: User = new User();
    currentUser = null;
  constructor(private _us: UserService, private _router: Router) { }

  ngOnInit() {
  }
  register() {
      this._us.addUser(this.user)
      .then(response => {
          console.log(`added ${response}`); this._router.navigateByUrl('/home')
      })
      .catch(err => console.log(err));
    //   this.currentUser = this.user;
    //   console.log(this.currentUser);
    //   this.user = new User();
  }
}

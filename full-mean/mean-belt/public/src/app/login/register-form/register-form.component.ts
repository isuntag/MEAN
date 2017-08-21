import { Component, OnInit } from '@angular/core';
import { User } from '../../classes/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
    user: User = new User();
    currentUser = null;
  constructor() { }

  ngOnInit() {
  }
  register() {
      this.currentUser = this.user;
      console.log(this.currentUser);
      this.user = new User();
  }
}

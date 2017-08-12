import { Component } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user = new User();
  users = [];
  new_user = null;
  onSubmit(){
      this.new_user = this.user;
      this.users.push(this.user);
      this.user = new User();
      console.log(this.users)
  }
}

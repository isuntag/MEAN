import { Component, OnInit } from '@angular/core';
import { Content } from '../classes/content';
import { User } from '../classes/user';
import { ContentService } from '../services/content.service';
import { UserService } from '../services/user.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    content: Content = new Content();
        error = "";
        private user: User;
  constructor(private _cs: ContentService, private _router: Router, private _us: UserService) { }

  ngOnInit() {
      this._us.checkstatus()
      .then(user => this.user = user)
      .catch(err => this._router.navigateByUrl('/login'))
  }

  onSubmit() {
        this.content._username = this.user.name;
        this.content._userID = this.user._id;
        this._cs.addContent(this.content)
        .then(response => {console.log(response); this._router.navigateByUrl('/')
        })
        .catch(error => {
            console.error(error);
            this.error = error;
        });
    }
}

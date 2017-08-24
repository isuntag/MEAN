import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { UserService } from '../services/user.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { Content } from '../classes/content';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    private user;
    private subscription;
    private contents: Content;
  constructor(private _cs: ContentService, private _router: Router, private _route: ActivatedRoute, private _us: UserService) { }

  ngOnInit() {
     this.subscription = this._route.paramMap
       .switchMap(params => {
           return this._cs.getOneContent(params.get('id'))
       })
       .subscribe(content => this.contents = content);

     this._us.checkstatus()
     .then(user => this.user = user)
     .catch(err => this._router.navigateByUrl('/'));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

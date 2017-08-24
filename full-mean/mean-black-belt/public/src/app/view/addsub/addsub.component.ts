import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contentsub } from '../../classes/contentsub';
import { Content } from '../../classes/content';
import { ContentService } from '../../services/content.service';
import { UserService } from '../../services/user.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addsub',
  templateUrl: './addsub.component.html',
  styleUrls: ['./addsub.component.css']
})
export class AddsubComponent implements OnInit, OnDestroy {
    private sub: Contentsub = new Contentsub();
    private user;
    private subscription;
    private contents;
    private error = "";
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
     onSubmit() {
           this.sub._username = this.user.name;
           this.sub._userID = this.user._id;
           this._cs.addContentsub(this.sub, this.contents._id)
           .then(response => {console.log(response); this._router.navigateByUrl(`/${this.contents._id}`)})
           .catch(error => {
               console.error(error);
               this.error = error;
           });
       }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    questions = [];
    subscription2: any;
    count: any;
  constructor(private _qs: QuestionService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
      this.loggedinstatus()

      this._qs.getQuestions()
      .then(response => {
          this.questions = response;
      })
      .catch(err => console.warn(err));

      this.subscription2 = this._route.paramMap
        .switchMap(params => {
            return this._qs.getAnswers(params.get(this.questions[0]))
        })
        .subscribe(answers => {this.count = answers.length})
  }
  loggedinstatus(){
    this._qs.loggedIn()
    .then(data => this.name = data.name)
    .catch(err => console.log(err))
}
  ngOnDestroy() {
    this.subscription2.unsubscribe();
  }
  // logout() {
  //     this._qs.logout()
  //     .then(response => {
  //         this._router.navigateByUrl('/index')
  //     })
  //     .catch(err => console.warn(err))
  // }
}

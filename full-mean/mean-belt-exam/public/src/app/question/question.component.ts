import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnDestroy {
    question:object = {};
    subscription: any;
    subscription2: any;
    answerCount: any
    answers=[];
    questionID = ""
    count: any;
    error: any;
  constructor(private _qs: QuestionService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
      this.subscription = this._route.paramMap
        .switchMap(params => {
            return this._qs.getOneQuestion(params.get('id'))
        })
        .subscribe(question => this.question = question)
    this.subscription2 = this._route.paramMap
      .switchMap(params => {
          return this._qs.getAnswers(params.get('id'))
      })
      .subscribe(answers => {this.answers = answers; this.count = answers.length})
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
      this.subscription2.unsubscribe();
    }
    like(id) {
        this._qs.like(id)
        .then(response => {
            this._router.navigateByUrl('/'+this.questionID);
        })
        .catch(err => {this.error = err})
    }
  }

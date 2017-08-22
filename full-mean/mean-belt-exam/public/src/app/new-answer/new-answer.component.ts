import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';
import { Answer } from '../classes/answer';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent implements OnInit, OnDestroy {
    question:object = {};
    subscription: any;
    answer = new Answer();
    error="";
    _questionID="";

  constructor(private _qs: QuestionService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
      this.subscription = this._route.paramMap
        .switchMap(params => {
            return this._qs.getOneQuestion(params.get('id'))
        })
        .subscribe(question => {this.question = question; this._questionID=question._id;})
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
    onSubmit() {
        this.answer._questionID = this._questionID;
        this._qs.newAnswer(this.answer)
        .then(response => {
            this._router.navigateByUrl('/');
        })
        .catch(err => {this.error = err})
    }
    clear() {
        this.answer = new Answer();
    }
  }

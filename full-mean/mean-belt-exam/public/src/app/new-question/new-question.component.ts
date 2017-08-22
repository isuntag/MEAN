import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';
import { Routes, Router } from '@angular/router';
import { Question } from '../classes/question';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
    question= new Question();
    loginError="";
  constructor(private _qs: QuestionService, private _router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
      this._qs.newQuestion(this.question)
      .then(response => {
          this._router.navigateByUrl('/');
      })
      .catch(err => {this.loginError = err})
  }
  clear() {
      this.question = new Question();
  }
}

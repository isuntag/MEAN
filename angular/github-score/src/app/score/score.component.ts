import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
    username="";
    info = [];
    err = ""
  constructor(private _taskService: TaskService) { }
  ngOnInit() {
  }
  onSubmit() {
      this._taskService.retrieveInfo(this.username)
      .then(info => this.info = info)
      .catch(err => this.err = err);
  }
}

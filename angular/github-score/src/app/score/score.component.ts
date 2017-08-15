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
    err = "";
    // make a private variable _taskService that is in the form of the TaskService
  constructor(private _taskService: TaskService) { }
  ngOnInit() {
  }
  onSubmit() {
    //   on submit send a request to use method retrieveInfo from the TaskService service to get the github information of the entered username
      this._taskService.retrieveInfo(this.username)
    //   if it returns info then set this.info to the info and reset this.err
      .then(info => {this.info = info; this.err=null})
    //   if it returns an error then set this.error to err and reset this.info
      .catch(err => {this.err = err; this.info=[]});
  }
}

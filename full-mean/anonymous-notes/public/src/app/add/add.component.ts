import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private _ns : NoteService
  ) { }

  ngOnInit() {
  }
  add
}

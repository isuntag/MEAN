import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NewQuote } from '../new-user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    newquote = {
        quote: "",
        author: "",
        rating: 0,
    }
    @Output() addNewQuote = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
      console.log(this.newquote);
      this.addNewQuote.emit(this.newquote);
      this.newquote = {
          quote: "",
          author: "",
          rating: 0,
      }
  }
}

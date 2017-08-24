import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Content } from '../../classes/content';
import { ContentService } from '../../services/content.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subdash',
  templateUrl: './subdash.component.html',
  styleUrls: ['./subdash.component.css']
})
export class SubdashComponent implements OnInit {

    private _content: Content = new Content();

    @Input() set contents(newcontent){
        console.log(newcontent)
        this._content = newcontent;
    }

    @Input() user;

  constructor(private _cs: ContentService, private _router: Router) { }

  ngOnInit() {
  }
  upCount(subid) {
      this._cs.upCount(subid)
      .then(response => {console.log(response);})
      .catch(error => {
          console.error(error);
      });
  }
  deleteSub(subid) {
      this._cs.deleteSub(subid)
      .then(response => {console.log(response);})
      .catch(error => {
          console.error(error);
      });
  }
}

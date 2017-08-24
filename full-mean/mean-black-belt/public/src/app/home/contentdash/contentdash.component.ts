import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Content } from '../../classes/content';
import { ContentService } from '../../services/content.service';
import { Routes, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contentdash',
  templateUrl: './contentdash.component.html',
  styleUrls: ['./contentdash.component.css']
})
export class ContentdashComponent implements OnInit {
    private _contents = [];
    private display_contents= [];
    private searchfield = {
        value: ""
    }

    @Input() set contents(newcontents){
        this._contents = newcontents;
        this.display_contents = this._contents;
    }

    @Input() userid: string;

    @Output() refresh = new EventEmitter();

    constructor(private _cs: ContentService, private _router: Router) { }



  ngOnInit() {
  }

  delete(contentID) {
    this._cs.delete(contentID)
    //emit up to update list
    .then(result => this.refresh.emit('update!'))
    .catch(err => console.log(err))
  }

  search() {
    this.display_contents = this._contents.filter(content => {
        return content.contenttitle.toLowerCase().includes(this.searchfield.value.toLowerCase())
    });
    this.searchfield = {
        value: ""
    }
  }
  reset() {
    this.display_contents = this._contents;
  }
}

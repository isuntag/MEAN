import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
    _quotes:Array<any>;
    @Input() set quotes(newval){
        this._quotes = newval;
    };
  constructor() { }

  ngOnInit() {
  }
  increase(ind){
      this._quotes[ind].rating += 1;
  }
  decrease(ind){
      this._quotes[ind].rating -= 1;
  }
  delete(ind){
      console.log(ind);
      this._quotes.splice(ind,1);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quotes = [];
  dataFromChild(eventData){
      this.quotes.push(eventData);
      console.log(this.quotes);
  }
}

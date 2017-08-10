import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Timezone Display';
  time: any = Date.now();
  timezone = '';
  timeChange(change){
      this.timezone = change.timezone;
    //   could not get time to change
    //   this.time = (this.time).setHours((this.time).getHours()-change.offset);
  }
  clear(){
      this.timezone = '';
      this.time = Date.now();
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  switchboard = ['off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off', 'off']

  change(idx){
      if(this.switchboard[idx] === 'on'){
          this.switchboard[idx] = 'off';
      }
      else{
          this.switchboard[idx] = 'on';
      }
  }
}

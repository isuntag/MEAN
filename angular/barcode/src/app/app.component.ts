import { Component } from '@angular/core';
let num = function(){
    return Math.floor(Math.random()*255);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  colors = [
  {color: num()+','+num()+','+num()},
  {color: num()+','+num()+','+num()},
  {color: num()+','+num()+','+num()},
  {color: num()+','+num()+','+num()},
  {color: num()+','+num()+','+num()},
  {color: num()+','+num()+','+num()},
  {color: num()+','+num()+','+num()},
  {color: num()+','+num()+','+num()},
  {color: num()+','+num()+','+num()},
  ];
}

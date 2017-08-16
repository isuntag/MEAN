import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    products = [];
  title = 'app';
  onSubmit(product) {
      console.log(product);
      this.products.push(product);
      console.log(this.products)
  }
}

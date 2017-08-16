import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
    @Output() addProduct = new EventEmitter();
    product = {
        title: "",
        price: "",
        image: "",
    }
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
      this.addProduct.emit(this.product);
      console.log(this.product);
      this.product = {
          title: "",
          price: "",
          image: "",
      }
  }
}

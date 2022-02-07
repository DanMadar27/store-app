import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: { id: number, name: string }[];

  constructor() {
    // this is mock data. change when doing integration with API.

    this.products = [
      {id: 0, name: 'product 1'},
      {id: 1, name: 'product 2'},
      {id: 2, name: 'product 3'},
      {id: 3, name: 'product 4'},
      {id: 4, name: 'product 5'},
      {id: 5, name: 'product 6'},
      ];
   }

  ngOnInit(): void {
  }

}

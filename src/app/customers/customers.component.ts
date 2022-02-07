import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: { id: number }[];

  constructor() {
    // this is mock data. change when doing integration with API.

    this.customers = [
      {id: 0},
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
    ];   
  }

  ngOnInit(): void {
  }

}

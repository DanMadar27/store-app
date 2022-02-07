import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent extends Person implements OnInit {

  @Input() id: number;
  personId: number;
  createdAt: string;
  updatedAt: string;

  constructor() {
    // this is mock data. change when doing integration with API.
    super('john', 'brown', '25-06-1991', 
      'Brazil', 'Rio', 'street', '15790', '0501234',
      'xyz@aaa.bbb', '21-02-2000', '11-03-2001');
    
    this.id = 1;
    this.personId = 1;
    this.createdAt = '21-02-2001';
    this.updatedAt = '11-03-2002'
  }
  
  ngOnInit(): void {
  }

}
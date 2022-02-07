import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  supplier_id: number;
  price: number;
  createdAt: string;
  updatedAt: string;
  
  constructor() {
    // this is mock data. change when doing integration with API.
  
    this.id = -1;
    this.supplier_id = 1;
    this.name = '';
    this.price = 58;
    this.createdAt = '10-04-19 12:00:17';
    this.updatedAt = '11-04-19 12:00:17';
  }

  ngOnInit(): void {
  }

}

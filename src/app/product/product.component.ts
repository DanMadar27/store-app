import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() id: number;
  @Input() name: string;
  supplier_id: number;
  category: ('shirt' | 'pants' | 'shoes' | 'socks' | 'hat');
  type: ('men' | 'women' | 'kids' | 'babies');
  size: string;
  color: string;  
  price: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  deleted_at: string;

  constructor() {
    // this is mock data. change when doing integration with API.

    this.id = -1;
    this.supplier_id = 1;
    this.name = '';
    this.category = 'shoes';
    this.type = 'men';
    this.size = '44';
    this.color = 'black';
    this.price = 58;
    this.quantity = 7;
    this.createdAt = '10-04-19 12:00:17';
    this.updatedAt = '11-04-19 12:00:17';
    this.deleted_at = '12-04-19 12:00:17';
  }

  ngOnInit(): void {
  }

}

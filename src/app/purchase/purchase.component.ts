import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  @Input() id: number;
  customer_id: number;
  createdAt: string;
  updatedAt: string;

  constructor() {
    this.id = 1;
    this.customer_id = 2;
    this.createdAt = '10-04-19 12:00:17';
    this.updatedAt = '11-04-19 12:00:17';
  }

  ngOnInit(): void {
  }

}

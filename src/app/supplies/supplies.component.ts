import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {
  
  supplies: { id: number, name: string }[];

  constructor() { 
  // this is mock data. change when doing integration with API.
  
  this.supplies = [
    {id: 0, name: 'supply 1'},
    {id: 1, name: 'supply 2'},
    {id: 2, name: 'supply 3'},
    {id: 3, name: 'supply 4'},
    {id: 4, name: 'supply 5'},
    {id: 5, name: 'supply 6'},
    ];
  }

  ngOnInit(): void {
  }

}

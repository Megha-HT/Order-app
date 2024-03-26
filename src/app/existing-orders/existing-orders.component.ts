import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-existing-orders',
  standalone: true,
  imports: [MatCardModule, CommonModule, RouterModule],
  templateUrl: './existing-orders.component.html',
  styleUrl: './existing-orders.component.css'
})
export class ExistingOrdersComponent {

  constructor(private p: ProductService) { }
  public existingOrders: any;

  public productList: any;
  ngOnInit() {
    this.productList = this.p.getValue();
    console.log('coming from API', this.productList);
    this.existingOrders = this.productList;

  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ProductService } from '../services/products.service';
import { MatSelectModule } from '@angular/material/select';
import { CounterComponent } from '../counter/counter.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatSelectModule, CounterComponent, FormsModule],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.css'
})
export class OrderDetailsComponent implements OnInit {
  orderID: any;
  order: any;


  finalPrice: any;
  countChange(event: any, id: any) {
    console.log(event);
    // this.finalPrice = 
  }

  public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private p: ProductService) {
  }
  existingOrders: any;
  public productList: any;
  ngOnInit() {

    this.productList = this.p.getValue();
    console.log('coming from API', this.productList);
    this.existingOrders = this.productList;
    this.orderID = this.activatedRoute.snapshot.paramMap.get('id');
    this.order = this.productList.find((x: any) => x.id == this.orderID);
    //this.numbers = this.order.quantity;
    //this.order = this.order['items'];
    console.log(this.order);
    this.countChange(this.order.quantity, this.order.unitPrice);

    // this.finalPrice = 
  }


  navigateToProductsView(id: any) {
    this.router.navigate(['viewProducts', { id: this.orderID }]);
  }

  deleteItem(productId: any) {
    this.p.removeItemFromCart(productId);
  }

  placeOrder(id: any) {
    console.log("the order ID" + id);
    //  this.orderID = this.activatedRoute.snapshot.paramMap.get('id');
    this.order = this.productList.find((x: any) => x.id == this.orderID);
    console.log(this.order.items);
    this.p.placeOrder(this.order.items, this.orderID);
    this.router.navigate(['existingOrders']);
  }
}

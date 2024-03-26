import { Component, OnInit } from '@angular/core';
import { RouterOutlet, ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/products.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'order-app';
productList : any;
existingOrders: any;
orderID: any;
order: any;
constructor(private activatedRoute : ActivatedRoute, private p:ProductService, private router:Router){}
ngOnInit(): void {
  this.productList = this.p.getValue();
    console.log('coming from API', this.productList);
    this.existingOrders = this.productList;
    this.orderID = this.activatedRoute.snapshot.paramMap.get('id')? this.activatedRoute.snapshot.paramMap.get('id') : 1;
    this.order = this.productList.find((x: any) => x.id == this.orderID);
    //this.numbers = this.order.quantity;
    //this.order = this.order['items'];
    console.log(this.order);
}
}

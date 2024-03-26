import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/products.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, MatButtonModule, FormsModule, RouterModule],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent implements OnInit {
  numberQty: number = 1;
 productListArray = [
    {
      "id": "A101",
      "description": "Screwdriver",
      "category": "1",
      "price": "9.75"
    },
    {
      "id": "A102",
      "description": "Electric screwdriver",
      "category": "1",
      "price": "49.50"
    },
    {
      "id": "B101",
      "description": "Basic on-off switch",
      "category": "2",
      "price": "4.99"
    },
    {
      "id": "B102",
      "description": "Press button",
      "category": "2",
      "price": "4.99"
    },
    {
      "id": "B103",
      "description": "Switch with motion detector",
      "category": "2",
      "price": "12.95"
    }
  ];

  public productList: any;
  constructor(private p:ProductService, private route:ActivatedRoute){
    this.route.params.subscribe(params => {
      this.id = params['id'];});
    console.log(this.id);
  }

  ngOnInit(): void {

    this.p.getProduct().subscribe((response:any)=>{
      this.productList = response;
      console.log('coming from API', this.productList);
    })
  }

public id : any;
  addToCart(id:any, pp:any){
    let ID = id;
    let price = pp;
    let qty = this.numberQty;
    let tt = pp;
    var productId: any;
    var unitPrice: any;
    var quantity: any;
    var total: any;
    var product = {
      productId : ID,
      unitPrice: price,
      quantity: qty,
      total: tt
    };
    console.log("the new object is"+JSON.stringify(product));
    this.p.addToCart(product, this.id);
  }

}

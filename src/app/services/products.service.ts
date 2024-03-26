import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    //public cartItemsList:any = [];
    public productList = new BehaviorSubject<any>([]);

    constructor(private http: HttpClient) { }

    getProduct() {
        return this.productList.asObservable();

    }

    setProduct(product: any) {
        this.cartItemsList.push(...product);
        this.productList.next(product);
    }

    public cartItemsList = [{
        "id": "1",
        "customer-id": "1",
        "items": [
            {
                "productId": "B102",
                "quantity": "10",
                "unitPrice": "4.99",
                "total": "49.90"
            }
        ],
        "total": "49.90"
    },
    {
        "id": "2",
        "customer-id": "2",
        "items": [
            {
                "productId": "B102",
                "quantity": "5",
                "unitPrice": "4.99",
                "total": "24.95"
            }
        ],
        "total": "24.95"
    },
    {
        "id": "3",
        "customer-id": "3",
        "items": [
            {
                "productId": "A101",
                "quantity": "2",
                "unitPrice": "9.75",
                "total": "19.50"
            },
            {
                "productId": "A102",
                "quantity": "1",
                "unitPrice": "49.50",
                "total": "49.50"
            }
        ],
        "total": "69.00"
    }
    ]

    addToCart(product: any, id: any) {
        for (let i = 0; i < this.cartItemsList.length; i++) {
            if (this.cartItemsList[i].id === id)
                this.cartItemsList[i].items.push(product);
            console.log(this.cartItemsList[i].items);
            this.productList.next(this.cartItemsList[i].items);
            console.log(this.productList);
        }
        this.getTotal();
    }


    getTotal() {
        let totalPrice = 0;
        this.cartItemsList.map((a: any) => {
            totalPrice += a.total;
        })
        return totalPrice;
    }

    removeItemFromCart(productId: any) {
        console.log("list has" + JSON.stringify(this.cartItemsList) + productId);
        for (let i = 0; i < this.cartItemsList.length; i++) {
            console.log("the array has" + JSON.stringify(this.cartItemsList[i].items));
            this.cartItemsList[i].items.map((a: any, index: any) => {
                if (productId === a.productId)
                    this.cartItemsList[i].items.splice(productId, 1)
                console.log(JSON.stringify(this.cartItemsList))
            })
        };
        this.getTotal();
    }

    getValue() {
        return this.cartItemsList;
    }

    placeOrder(order:any, id:any) {
       // Use this when actual API is integrated //
    /*    
        let headers = { 'Authorization': 'Bearer token'}
        let body = order;
        this.http.post<any>('https://reqres.in/invalid-url', body , {headers} ).subscribe({
        next: data => {
            //write success message
            {console.log("Your order is placed", this.productList)
            }
        },
        error: error => {
            // this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })  */
    console.log('Your order is placed', order);
    
    console.log("empty the array",this.cartItemsList);
    for (let i = 0; i < this.cartItemsList.length; i++) {
        if (id === this.cartItemsList[i].id)
            this.cartItemsList[i].items  = [];
        console.log(this,this.cartItemsList[i].items);
    }
    window.alert("Order is placed successfully!");
    console.log(JSON.stringify(this.cartItemsList))
}
};

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewProductsComponent } from './view-products/view-products.component';
import { AppComponent } from './app.component';
import { ExistingOrdersComponent } from './existing-orders/existing-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

export const routes: Routes = [
    { path: '', component: ExistingOrdersComponent },
    { path: 'viewProducts', component: ViewProductsComponent },
    { path: 'existingOrders', component: ExistingOrdersComponent },
    { path: 'order/:id', component: OrderDetailsComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
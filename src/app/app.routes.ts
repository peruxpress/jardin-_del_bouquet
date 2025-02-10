import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { ProductDetailsComponent } from './features/product/product-details/product-details.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Inicio', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:id', component: ProductDetailsComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'checkout', component: CheckoutComponent },
  // { path: 'orders', component: OrderListComponent },
  // { path: 'orders/:id', component: OrderDetailComponent },
  { path: '**', redirectTo: 'Inicio', pathMatch: 'full' },
];

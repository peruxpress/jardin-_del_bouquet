import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'products', component: ProductListComponent },
  // { path: 'products/:id', component: ProductDetailComponent },
  // { path: 'cart', component: CartComponent },
  // { path: 'checkout', component: CheckoutComponent },
  // { path: 'orders', component: OrderListComponent },
  // { path: 'orders/:id', component: OrderDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

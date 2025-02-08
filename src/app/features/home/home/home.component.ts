import { Component } from '@angular/core';
import { CategoryListComponent } from '../categoryList/categoryList.component';
import { ProductListComponent } from '../../product/product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryListComponent, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}

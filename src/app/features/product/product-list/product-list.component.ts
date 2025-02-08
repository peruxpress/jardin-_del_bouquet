import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../../shared/models/product.interface';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  product: Product = {
    id: 1,
    nombre: 'Producto 1',
    descripcion: 'Descripción del producto 1',
    precio: 100,
    imagenURL: 'https://dummyimage.com/190/fff/aaa',
    categoryId: 1,
  };
}

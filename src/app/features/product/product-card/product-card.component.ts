import { Component, Input } from '@angular/core';
import { Product } from '../../../shared/models/product.interface';
import { CommonModule } from '@angular/common';
import { DEFAULT_CURRENCY_CODE } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'S/ ' }],
})
export class ProductCardComponent {
  /*
  product: Product = {
    id: 1,
    nombre: 'Producto 1',
    descripcion: 'Descripción del producto 1',
    precio: 100,
    imagenURL: 'https://dummyimage.com/190/fff/aaa',
    categoryId: 1,
  };
  */

  @Input() product!: Product;

  addToCart(product: Product): void {
    console.log('Producto agregado al carrito', product);
  }
}

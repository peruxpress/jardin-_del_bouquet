import { Component, inject, Input } from '@angular/core';
import { Product } from '../../../shared/models/product.interface';
import { CommonModule } from '@angular/common';
import { DEFAULT_CURRENCY_CODE } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'S/ ' }],
})
export class ProductCardComponent {
  @Input() product!: Product;
  cartService = inject(CartService);

  addToCart() {
    this.cartService.addToCart(this.product);
  }
}

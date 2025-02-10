import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { OrderListComponent } from '../orders/order-list/order-list.component';
import { CartService } from '../../core/services/cart/cart.service';
import { Product } from '../../shared/models/product.interface';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, OrderListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  @Output() closeCart = new EventEmitter<void>();
  cartService = inject(CartService);
  cartItems = this.cartService.getCartItems();

  onClose(): void {
    this.closeCart.emit();
  }

  removeItem(product: Product): void {
    this.cartService.removeFromCart(product);
  }

  updateQuantity(productId: number, event: Event) {
    const newQuantity = Number((event.target as HTMLInputElement).value);
    if (newQuantity > 0) {
      this.cartService.updateQuantity(productId, newQuantity);
    }
  }

  clearCart() {
    this.cartService.clearCart();
  }

  getTotalPrice() {
    return this.cartItems().reduce(
      (sum, item) => sum + item.product.precio * item.quantity,
      0,
    );
  }
}

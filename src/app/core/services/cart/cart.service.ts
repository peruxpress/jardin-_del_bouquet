import { Injectable, signal } from '@angular/core';
import { CartItem } from '../../../shared/models/cart-item.model';
import { Product } from '../../../shared/models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product: Product) {
    this.cartItems.update((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);
      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...items, { product, quantity: 1 }];
    });
  }

  // Eliminar un producto del carrito
  removeFromCart(product: Product) {
    this.cartItems.update((items) =>
      items.filter((item) => item.product.id !== product.id),
    );
  }

  // Actualizar la cantidad de un producto en el carrito
  updateQuantity(productId: number, quantity: number) {
    this.cartItems.update((items) =>
      items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  }

  // Vaciar el carrito
  clearCart() {
    this.cartItems.set([]);
  }
}

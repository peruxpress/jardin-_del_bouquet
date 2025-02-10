import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { OrderListComponent } from '../orders/order-list/order-list.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, OrderListComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  @Output() closeCart = new EventEmitter<void>();

  onClose(): void {
    this.closeCart.emit();
  }
}

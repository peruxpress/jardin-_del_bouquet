import { inject, Injectable, signal } from '@angular/core';
import { Order } from '../../../shared/models/order.interface';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://localhost:3000/api/orders';
  private orders = signal<Order[]>([]);
  private http = inject(HttpClient);

  // Obtener todas las órdenes
  fetchOrders(): void {
    this.http
      .get<Order[]>(this.apiUrl)
      .subscribe((data) => this.orders.set(data));
  }

  // Obtener una orden específica
  fetchOrderById(id: number): ObservableInput<Order> {
    return this.http.get<Order>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva orden
  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, order);
  }

  // Obtener las órdenes almacenadas en el Signal
  getOrders() {
    return this.orders;
  }
}

import { inject, Injectable, signal } from '@angular/core';
import { Product } from '../../../shared/models/product.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/api/products';
  private products = signal<Product[]>([]);
  private http = inject(HttpClient);

  fetchProducts(): void {
    this.http
      .get<Product[]>(this.apiUrl)
      .subscribe((data) => this.products.set(data));
  }

  getProducts() {
    return this.products;
  }

  fetchProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  // Obtener productos por categoría
  fetchProductsByCategory(categoria: string): void {
    this.http
      .get<Product[]>(`${this.apiUrl}?categoria=${categoria}`)
      .subscribe((data) => this.products.set(data));
  }

  // Agregar un nuevo producto
  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }
}

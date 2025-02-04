import { inject, Injectable, signal } from '@angular/core';
import { Category } from '../../shared/models/category.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = 'http://localhost:3000/api/categories';
  private categories = signal<Category[]>([]);
  private http = inject(HttpClient);


  fetchCategories() {
    this.http.get<Category[]>(this.apiUrl)
      .subscribe(categories => {
        this.categories.set(categories);
        console.log(categories);

      });
  }

  getCategories() {
    return this.categories;
  }
}

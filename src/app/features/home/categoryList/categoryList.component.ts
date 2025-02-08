import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/category/category.service';
import { Category } from '../../../shared/models/category.interface';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [],
  templateUrl: './categoryList.component.html',
  styleUrl: './categoryList.component.scss',
})
export class CategoryListComponent implements OnInit {
  categoryService = inject(CategoryService);
  // categories = this.categoryService.getCategories();

  // Ejemplo de array con 4 categorias
  categories: Category[] = [
    {
      id: 1,
      nombre: 'Category 1',
      descripcion: 'Description 1',
      imagenURL: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      nombre: 'Category 2',
      descripcion: 'Description 2',
      imagenURL: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      nombre: 'Category 3',
      descripcion: 'Description 3',
      imagenURL: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      nombre: 'Category 4',
      descripcion: 'Description 4',
      imagenURL: 'https://via.placeholder.com/150',
    }
  ]


  ngOnInit() {
    this.categoryService.fetchCategories();
  }
}

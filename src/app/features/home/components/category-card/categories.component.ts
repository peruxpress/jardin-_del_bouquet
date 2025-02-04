import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../../../core/services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent implements OnInit {
  categoryService = inject(CategoryService);
  categories = this.categoryService.getCategories();

  ngOnInit() {
    this.categoryService.fetchCategories();
  }
}

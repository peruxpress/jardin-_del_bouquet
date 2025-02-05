import { Component, inject, OnInit } from '@angular/core';
import { CategoryService } from '../../../core/services/category/category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [],
  templateUrl: './categoryList.component.html',
  styleUrl: './categoryList.component.scss',
})
export class CategoryListComponent implements OnInit {
  categoryService = inject(CategoryService);
  categories = this.categoryService.getCategories();

  ngOnInit() {
    this.categoryService.fetchCategories();
  }
}

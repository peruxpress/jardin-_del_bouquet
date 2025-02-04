import { Component } from '@angular/core';
import { CategoriesComponent } from './components/category-card/categories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

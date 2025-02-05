import { Component } from '@angular/core';
import { CategoryListComponent } from '../categoryList/categoryList.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategoryListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

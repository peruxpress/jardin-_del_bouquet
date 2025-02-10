import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { CartComponent } from './features/cart/cart.component';
import { CommonModule } from '@angular/common';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    CartComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  openCart = false;
  cartItems = [
    { name: 'Artículo 1', price: 100 },
    { name: 'Artículo 2', price: 200 },
    { name: 'Artículo 3', price: 300 },
    { name: 'Artículo 4', price: 400 },
    // Agrega más artículos según sea necesario
  ];

  toggleCart() {
    this.openCart = !this.openCart;
  }

  get whatsappUrl(): string {
    const phoneNumber = '51973794590'; // Reemplaza con el número de teléfono deseado
    let message = 'Hola 👋,\nEstoy interesado en los siguientes artículos:\n\n';

    this.cartItems.forEach((item) => {
      message += `- ${item.name} 👉 S/${item.price}\n`;
    });

    message += '\nQuedo atento a su respuesta. Gracias 🙏';

    const params = new HttpParams().set('text', message);
    return `https://wa.me/${phoneNumber}?${params.toString()}`;
  }
}

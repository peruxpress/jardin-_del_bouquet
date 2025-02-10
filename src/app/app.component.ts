import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { CartComponent } from './features/cart/cart.component';
import { CommonModule } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { CartItem } from './shared/models/cart-item.model';
import { CartService } from './core/services/cart/cart.service';

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
  cartService = inject(CartService);
  cartItems = this.cartService.getCartItems();

  toggleCart() {
    this.openCart = !this.openCart;
  }

  get whatsappUrl(): string {
    const phoneNumber = '51973794590'; // Reemplaza con el número de teléfono deseado
    let message = 'Hola,\nEstoy interesado en los siguientes artículos:\n\n';

    // Itera sobre los items del carrito para armar el mensaje de WhatsApp en un WriteableStream
    this.cartItems().forEach((item: CartItem) => {
      message += `* ${item.product.nombre} --> ${item.quantity} unidades\n`;
    });

    message += '\nQuedo atento a su respuesta. Gracias';

    const params = new HttpParams().set('text', message);
    return `https://wa.me/${phoneNumber}?${params.toString()}`;
  }
}

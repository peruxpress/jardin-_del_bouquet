// 📌 Interface para ítems dentro de una orden
export interface OrderItem {
  id: number;
  productId: number;
  quantity: number;
  price: number;
  orderId: number;
}

// 📌 Interface para Orden (Historial de Compras)
export interface Order {
  id: number;
  buyerName: string;
  buyerEmail: string;
  total: number;
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  createdAt: string; // Fecha en formato ISO
  OrderItems: OrderItem[];
}

// 📌 Interface para la solicitud de creación de una orden
export interface CreateOrderRequest {
  buyerName: string;
  buyerEmail: string;
  items: {
    productId: number;
    quantity: number;
    price: number;
  }[];
}

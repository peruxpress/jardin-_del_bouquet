// 📌 Interface para ítems dentro de una orden
export interface OrderItem {
  id?: number;
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
  items: OrderItem[];
  total?: number;
  status?: string;
  createdAt?: string;
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

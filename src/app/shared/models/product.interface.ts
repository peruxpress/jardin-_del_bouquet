// 📌 Interface para Producto
export interface Product {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagenURL: string;
  categoryId: number;
}

// 📌 Interface para la solicitud de creación de producto
export interface CreateProductRequest {
  nombre: string;
  descripcion: string;
  precio: number;
  imagenURL: string;
  categoryId: number;
}

// 📌 Interface para filtrar productos por categoría
export interface ProductQueryParams {
  categoria?: string;
}

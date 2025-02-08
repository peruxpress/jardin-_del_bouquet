// 📌 Interface para Categoría
export interface Category {
  id: number;
  nombre: string;
  descripcion: string;
  imagenURL: string;
}

// 📌 Interface para la solicitud de creación de categoría
export interface CreateCategoryRequest {
  nombre: string;
  descripcion: string;
}

// 📌 Por implementar en backend
export interface UpdateCategory {
  id: number;
  nombre: string;
  descripcion: string;
}

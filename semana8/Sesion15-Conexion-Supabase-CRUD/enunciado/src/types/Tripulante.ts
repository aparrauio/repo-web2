/**
 * Interfaz Tripulante
 * Los nombres de propiedades coinciden EXACTAMENTE con las columnas de la
 * tabla "tripulantes" en Supabase (snake_case), para que los datos viajen
 * directo entre la base de datos y React sin una capa de conversión.
 */
export interface Tripulante {
  id: number;
  nombre: string;
  rol: string;
  avatar: string;
  nivel_oxigeno: number; // 0 a 100
  en_mision: boolean;
  especialidad?: string;
  bio?: string;
}

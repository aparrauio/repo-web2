export interface Tripulante {
  id: number;
  user_id: string;
  nombre: string;
  rol: string;
  avatar: string;
  nivel_oxigeno: number;
  en_mision: boolean;
  especialidad?: string;
  bio?: string;
}

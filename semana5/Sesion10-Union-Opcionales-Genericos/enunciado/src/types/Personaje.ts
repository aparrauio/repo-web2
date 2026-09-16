/**
 * Interfaz Personaje — heredada de la Sesión 9, con TODOs nuevos para
 * la Sesión 10 (tipo union + propiedades opcionales).
 */

// TODO 1: define aquí un tipo union llamado EstadoPersonaje, con
// exactamente estos 3 valores posibles: "activo", "herido", "derrotado"
//
export type EstadoPersonaje = "activo" | "herido" | "derrotado";

export interface Personaje {
  id: number;
  nombre: string;
  clase: string;
  nivel: number;
  vida: number;
  ataque: number;
  avatar: string;

  // TODO 2: agrega aquí la propiedad "estado", de tipo EstadoPersonaje
  estado: EstadoPersonaje;

  // TODO 3: agrega aquí dos propiedades OPCIONALES: arma y escudo (string)
  arma?: string;
  escudo?: string;
}

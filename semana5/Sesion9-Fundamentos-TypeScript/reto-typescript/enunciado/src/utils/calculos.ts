// TODO 1: importa el tipo Personaje
import type { Personaje } from "../types/Personaje.ts";

/**
 * TODO 2: tipa esta función:
 *   - parámetro "personaje" de tipo Personaje
 *   - retorno de tipo number
 */
export function calcularPoder(personaje: Personaje): number {
  return personaje.ataque * personaje.nivel;
}

/**
 * TODO 3: tipa esta función:
 *   - parámetro "personajes" de tipo Personaje[]
 *   - retorno de tipo Personaje
 */
export function obtenerPersonajeMasFuerte(personajes: Personaje[]): Personaje {
  return personajes.reduce((masFuerte, actual) =>
    calcularPoder(actual) > calcularPoder(masFuerte) ? actual : masFuerte
  );
}

/**
 * TODO 4: tipa esta función:
 *   - parámetro "nivel" de tipo number
 *   - retorno de tipo string
 */
export function formatearNivel(nivel: number): string {
  return `Nivel ${nivel}`;
}

//devuelve true si el nivel es mayor o igual a 50
export function esJefeFinal (personaje: Personaje): boolean {
  return personaje.nivel >= 50;
}

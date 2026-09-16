import type { Personaje } from "../types/Personaje.ts";

/**
 * Funciones heredadas de la Sesión 9 — ya completas y funcionando.
 * No necesitas modificar este archivo para el reto de hoy.
 */

export function calcularPoder(personaje: Personaje): number {
  return personaje.ataque * personaje.nivel;
}

export function obtenerPersonajeMasFuerte(personajes: Personaje[]): Personaje {
  return personajes.reduce((masFuerte, actual) =>
    calcularPoder(actual) > calcularPoder(masFuerte) ? actual : masFuerte
  );
}

export function formatearNivel(nivel: number): string {
  return `Nivel ${nivel}`;
}

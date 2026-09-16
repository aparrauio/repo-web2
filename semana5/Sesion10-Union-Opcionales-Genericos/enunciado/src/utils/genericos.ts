/**
 * Funciones genéricas — Sesión 10
 * Estas funciones deben funcionar con CUALQUIER tipo de dato (Personaje,
 * Item, o cualquier otro que definas en el futuro), sin duplicar código.
 */

/**
 * TODO 1: completa esta función genérica.
 *   - <T> representa "cualquier tipo".
 *   - Recibe: una lista de tipo T[].
 *   - Devuelve: un elemento aleatorio de esa lista, de tipo T.
 *
 * export function obtenerAleatorio<T>(lista: T[]): T {
 *   const indice = Math.floor(Math.random() * lista.length);
 *   return lista[indice];
 * }
 */
export function obtenerAleatorio<T>(lista: T[]): T {
  // TODO: implementa la lógica y agrega los tipos genéricos de arriba
  const indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}

/**
 * TODO 2: completa esta función genérica CON RESTRICCIÓN.
 *   - <T extends { id: number }> significa "cualquier tipo T, siempre que
 *     tenga una propiedad id de tipo number".
 *   - Recibe: una lista de tipo T[], y un id de tipo number.
 *   - Devuelve: el elemento con ese id, de tipo T, o undefined si no existe.
 *
 * export function buscarPorId<T extends { id: number }>(
 *   lista: T[],
 *   id: number
 * ): T | undefined {
 *   return lista.find((elemento) => elemento.id === id);
 * }
 */
export function buscarPorId<T extends { id: number }>( lista: T[], id: number): T | undefined {
  // TODO: implementa la lógica y agrega los tipos genéricos de arriba
  return lista.find((elemento) => elemento.id === id);
}

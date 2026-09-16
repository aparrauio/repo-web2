/**
 * Funciones de cálculo para las estadísticas de los personajes.
 * En JavaScript puro, nada garantiza qué forma tiene el objeto "personaje"
 * que reciben estas funciones — solo lo sabemos por convención y comentarios.
 */

export function calcularPoder(personaje) {
  return personaje.ataque * personaje.nivel;
}

export function obtenerPersonajeMasFuerte(personajes) {
  return personajes.reduce((masFuerte, actual) =>
    calcularPoder(actual) > calcularPoder(masFuerte) ? actual : masFuerte
  );
}

export function formatearNivel(nivel) {
  return `Nivel ${nivel}`;
}

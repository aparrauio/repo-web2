/**
 * RETO 1 — El Servidor Fantasma 👻
 * Semana 3 · Sesión 5 — Comunicación asíncrona I
 *
 * Completa la función traducirRespuestaFantasma() siguiendo el ENUNCIADO.md
 * Ejecuta este archivo con: node servidor-fantasma.js
 */

function traducirRespuestaFantasma({ status, body }) {
  // TODO 1: Usa un switch sobre "status" para distinguir 200, 404 y 500.
  // TODO 2: En cada caso, imprime un mensaje distinto y con personalidad.
  // TODO 3: Usa JSON.stringify(body) para mostrar el body como texto.
  // TODO 4: Agrega un caso "default" para códigos desconocidos.

  //convertir el body en formato JSON
  const bodyJson = JSON.stringify(body);

  switch (status) {
    case 200:
      //200 - todo ok
      console.log("Todo salió bien.");
      console.log("Datos recibidos: ", bodyJson);
      break;
    case 404:
      //404 - no encontrado
      console.log("El servidor no encontró lo que buscabas.");
      console.log("Datos recibidos: ", bodyJson);
      break;
    case 500:
      //500 - error del servidor
      console.log("Algo falló internamente.");
      console.log("Datos recibidos: ", bodyJson);
      break;
    default:
      //si llega cualquier otro codigo de estado
      console.log("El servidor no indentificó lo que querías.", status);
      console.log("Datos recibidos: ", bodyJson);
      break;
  }
}

// ---- Casos de prueba (no los modifiques) ----
console.log("--- Caso 200 ---");
traducirRespuestaFantasma({ status: 200, body: { mensaje: "Todo en orden" } });

console.log("\n--- Caso 404 ---");
traducirRespuestaFantasma({ status: 404, body: { ruta: "/tesoro-perdido" } });

console.log("\n--- Caso 500 ---");
traducirRespuestaFantasma({ status: 500, body: { error: "el fantasma tropezó" } });

console.log("\n--- Caso 333 ---");
traducirRespuestaFantasma({ status: 333, body: { error: "el fantasma tropezó" } });

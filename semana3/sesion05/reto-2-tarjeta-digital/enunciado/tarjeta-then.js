/**
 * RETO 2 — Tarjeta de Presentación Digital 🪪  (versión .then())
 * Semana 3 · Sesión 5 — Comunicación asíncrona I
 *
 * Completa el código siguiendo el ENUNCIADO.md
 * Ejecuta con: node tarjeta-then.js
 */

const URL_USUARIO = "https://jsonplaceholder.typicode.com/users/1";

function imprimirTarjeta(nombre, correo) {
  // TODO (opcional): mejora este formato de tarjeta si quieres.
  console.log("┌─────────────────────────────┐");
  console.log(`│  ${nombre}`);
  console.log(`│  ${correo}`);
  console.log("└─────────────────────────────┘");
}

function obtenerUsuario() {
  // paso 1: obtener la respuesta con fetch y convertir a JSON
  fetch(URL_USUARIO)
    .then((respuesta) => {
      //paso 2: verificar que respondió el servidor
      //si hubo algun error, debo mostrarlo
      if (!respuesta.ok) {
        throw new Error("El servidor respondió con estado: " + respuesta.status);
      }
      //retornar la respuesta del servidor
      return respuesta.json();
    })
    //paso 3: procesar la respuesta obtenida
    .then((datos) => {
      //extraer los datos de la respuesta
      const { name: nombre, email: correo } = datos;
      imprimirTarjeta(nombre, correo);
    })
    //paso 4: manejar errores
    .catch((error) => {
      console.log("No se pudo procesar la petición. ", error.message);
    });
}

obtenerUsuario();

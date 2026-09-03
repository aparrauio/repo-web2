/**
 * RETO 2 — Tarjeta de Presentación Digital 🪪  (versión async/await)
 * Semana 3 · Sesión 5 — Comunicación asíncrona I
 *
 * Completa el código siguiendo el ENUNCIADO.md
 * Ejecuta con: node tarjeta-async.js
 */

const URL_USUARIO = "https://jsonplaceholder.typicode.com/users/1";

function imprimirTarjeta(nombre, correo) {
  console.log("┌─────────────────────────────┐");
  console.log(`│  ${nombre}`);
  console.log(`│  ${correo}`);
  console.log("└─────────────────────────────┘");
}

function imprimirTarjetaCompleta(nombre, correo, telefono, ciudad) {
  console.log("┌─────────────────────────────┐");
  console.log(`│  ${nombre}`);
  console.log(`│  ${correo}`);
  console.log(`│  Teléfono: ${telefono}`);
  console.log(`│  Ciudad: ${ciudad}`);
  console.log("└─────────────────────────────┘");
}

async function obtenerUsuario() {
  try {
    // paso 1: obtener la respuesta con fetch y convertir a JSON
    // await: espera la respuesta sin bloquear el resto del programa
    const respuesta = await fetch(URL_USUARIO);

    //paso 2: verificar que respondió el servidor
    //si hubo algun error, debo mostrarlo
    if (!respuesta.ok) {
      throw new Error("El servidor respondió con estado: " + respuesta.status);
    }

    //pasar la respuesta a formato json
    const datos = await respuesta.json();
    //extraer los datos de la respuesta
    const { name: nombre, email: correo, phone: telefono, address: { city: ciudad } } = datos;
    imprimirTarjeta(nombre, correo);
    imprimirTarjetaCompleta(nombre, correo, telefono, ciudad);

  } catch (error) {
    console.log("No se pudo procesar la petición. ", error.message);
  }
}

obtenerUsuario();

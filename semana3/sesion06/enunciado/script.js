/**
 * EXPLORADOR DE PAÍSES 🌍 — Plantilla
 * Semana 3 · Sesión 6 — fetch() en una página web dinámica
 *
 * API usada: countries.dev (gratuita, sin API key, sin registro).
 * Nota: reemplaza a REST Countries v3.1, que fue dado de baja.
 *
 * Completa los TODOs siguiendo ENUNCIADO.md y PISTA.md
 */

const URL_BASE = "https://countries.dev/name/";

const form           = document.querySelector("#form-busqueda");
const input          = document.querySelector("#input-pais");
const btnBuscar      = document.querySelector("#btn-buscar");
const btnReintentar  = document.querySelector("#btn-reintentar");

const estadoInicial  = document.querySelector("#estado-inicial");
const estadoCarga    = document.querySelector("#estado-carga");
const estadoError    = document.querySelector("#estado-error");
const textoError     = document.querySelector("#texto-error");
const tarjetaPais    = document.querySelector("#tarjeta-pais");

const elBandera      = document.querySelector("#bandera");        // <img>
const elBanderaEmoji = document.querySelector("#bandera-emoji");  // <span> de respaldo
const elNombre       = document.querySelector("#nombre-pais");
const elCapital      = document.querySelector("#capital");
const elPoblacion    = document.querySelector("#poblacion");
const elRegion       = document.querySelector("#region");

let ultimoPaisBuscado = "";

function ocultarTodo() {
  estadoInicial.classList.add("oculto");
  estadoCarga.classList.add("oculto");
  estadoError.classList.add("oculto");
  tarjetaPais.classList.add("oculto");
}

function mostrarCargando() {
  // TODO 1: oculta todo y muestra SOLO el estado de carga.
  //         Aprovecha para deshabilitar el botón "Buscar" (btnBuscar.disabled = true).
  ocultarTodo();
  estadoCarga.classList.remove("oculto");
  btnBuscar.disabled = true;
  btnBuscar.textContent = "Buscando..."
}

function mostrarError(mensaje) {
  // TODO 2: oculta todo y muestra SOLO el estado de error, usando "mensaje".
  //         No olvides volver a habilitar el botón "Buscar".
  ocultarTodo();
  textoError.textContent = mensaje;
  estadoError.classList.remove("oculto");
  btnBuscar.disabled = false;
  btnBuscar.textContent = "Buscar"
}

function mostrarPais(pais) {
  // TODO 3: oculta todo y muestra SOLO la tarjeta con los datos de "pais".
  //         Recuerda volver a habilitar el botón "Buscar".
  //
  //         Campos disponibles en countries.dev:
  //           pais.name          -> texto plano, ej. "Ecuador"
  //           pais.capital       -> texto plano, ej. "Quito"
  //           pais.population    -> número
  //           pais.region        -> texto plano
  //           pais.flag?.png     -> URL de imagen (puede no existir)
  //           pais.flag?.emoji   -> emoji de la bandera (respaldo)
  //
  //         TODO 3a: si pais.flag?.png existe, muéstralo en elBandera
  //                  (quita "oculto" de elBandera, agrégalo a elBanderaEmoji).
  //         TODO 3b: si NO existe, usa pais.flag?.emoji en elBanderaEmoji
  //                  (quita "oculto" de elBanderaEmoji, agrégalo a elBandera).
  //         TODO 3c: usa poblacion.toLocaleString() para formatear el número.
  ocultarTodo();

  const nombre = pais.name ?? "Nombre no disponible";
  const capital = pais.capital ?? "Capital no disponible";
  const poblacion = pais.population ?? 0;
  const region = pais.region ?? "Región no disponible";

  const banderaUrl = pais.flags.png;

  //mostrar bandera
  elBandera.src = banderaUrl;
  elBandera.classList.remove("oculto");

  elNombre.textContent = nombre;
  elCapital.textContent = capital;
  elPoblacion.textContent = poblacion;
  elRegion.textContent = region;

  tarjetaPais.classList.remove("oculto");
  btnBuscar.disabled = false;
  btnBuscar.textContent = "Buscar";
}

async function buscarPais(nombrePais) {
  ultimoPaisBuscado = nombrePais;

  // TODO 4: llama a mostrarCargando() ANTES de hacer la petición.
  mostrarCargando();

  try {
    // TODO 5: usa "await fetch(...)" con URL_BASE + encodeURIComponent(nombrePais)
    const respuesta = await fetch(URL_BASE + encodeURIComponent(nombrePais));

    // TODO 6: si la respuesta NO es "ok" (respuesta.ok === false),
    //         lanza un error con throw new Error(...)
    if (!respuesta.ok) {
      throw new Error("No se encontró el país: " + nombrePais);
    }

    // TODO 7: convierte la respuesta a JSON con "await respuesta.json()"
    const datos = await respuesta.json();

    // TODO 8: esta API puede responder con un arreglo VACÍO si no hay
    //         coincidencias (en vez de un error 404). Verifica que el
    //         arreglo tenga al menos un elemento antes de continuar;
    //         si no, lanza un error también.
    if (!Array.isArray(datos) || datos.length === 0) {
      throw new Error("No se encontró el país: " + nombrePais);
    }

    // TODO 9: llama a mostrarPais() con el PRIMER elemento del arreglo de datos
    mostrarPais(datos[0]);
    
    console.log(datos);

  } catch (error) {
    // TODO 10: llama a mostrarError() con un mensaje amigable
    mostrarError(error.message || "Se produjo un error al buscar el país.");
  }
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombrePais = input.value.trim();
  if (nombrePais) {
    buscarPais(nombrePais);
  }
});

btnReintentar.addEventListener("click", () => {
  if (ultimoPaisBuscado) {
    buscarPais(ultimoPaisBuscado);
  }
});

/**
 * Landing page — Pepito Pérez, Consultor de Tecnología
 * Lógica de la sección "En qué estoy trabajando", que consume el
 * API REST de GitHub para mostrar los 5 repositorios más recientes.
 *
 * Este archivo representa el "antes" de la migración a React: toda la
 * actualización del DOM se hace a mano con querySelector, classList y
 * creación manual de elementos.
 */

const USUARIO_GITHUB = "aparrauio";
const URL_REPOS = `https://api.github.com/users/${USUARIO_GITHUB}/repos?sort=updated&per_page=5`;

const elEstadoRepos   = document.querySelector("#estado-repos");
const elListaRepos    = document.querySelector("#lista-repos");
const elErrorRepos    = document.querySelector("#error-repos");
const elTextoError    = document.querySelector("#texto-error-repos");
const btnReintentar   = document.querySelector("#btn-reintentar-repos");

function ocultarTodo() {
  elEstadoRepos.classList.add("oculto");
  elListaRepos.classList.add("oculto");
  elErrorRepos.classList.add("oculto");
}

function mostrarCargando() {
  ocultarTodo();
  elEstadoRepos.classList.remove("oculto");
}

function mostrarError(mensaje) {
  ocultarTodo();
  elTextoError.textContent = `⚠️ ${mensaje}`;
  elErrorRepos.classList.remove("oculto");
}

// Construye el HTML de una sola tarjeta de repositorio a partir de un
// objeto "repo" devuelto por el API de GitHub.
function crearTarjetaRepo(repo) {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta-repo";

  const descripcion = repo.description || "Sin descripción disponible.";
  const lenguaje = repo.language || "N/A";

  tarjeta.innerHTML = `
    <h3><a href="${repo.html_url}" target="_blank" rel="noreferrer">${repo.name}</a></h3>
    <p>${descripcion}</p>
    <div class="repo-meta">
      <span>💻 ${lenguaje}</span>
      <span>⭐ ${repo.stargazers_count}</span>
    </div>
  `;

  return tarjeta;
}

function mostrarRepos(repos) {
  ocultarTodo();
  elListaRepos.innerHTML = ""; // limpiar contenido previo, por si se reintenta

  if (repos.length === 0) {
    elListaRepos.innerHTML = "<p>Este usuario no tiene repositorios públicos todavía.</p>";
  } else {
    repos.forEach((repo) => {
      elListaRepos.appendChild(crearTarjetaRepo(repo));
    });
  }

  elListaRepos.classList.remove("oculto");
}

async function cargarRepositorios() {
  mostrarCargando();

  try {
    const respuesta = await fetch(URL_REPOS);

    if (!respuesta.ok) {
      // El API de GitHub sin autenticar permite 60 peticiones/hora por IP;
      // un 403 normalmente significa que se alcanzó ese límite.
      if (respuesta.status === 403) {
        throw new Error("Se alcanzó el límite de peticiones al API de GitHub. Intenta más tarde.");
      }
      throw new Error("No se pudieron cargar los repositorios.");
    }

    const datos = await respuesta.json();
    mostrarRepos(datos);

  } catch (error) {
    mostrarError(error.message);
  }
}

btnReintentar.addEventListener("click", cargarRepositorios);

// Cargar los repositorios en cuanto la página termine de cargar.
cargarRepositorios();

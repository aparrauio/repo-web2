import { useState, useEffect } from "react";
import TarjetaRepositorio from "./TarjetaRepositorio.jsx";

const USUARIO_GITHUB = "aparrauio";
const URL_REPOS = `https://api.github.com/users/${USUARIO_GITHUB}/repos?sort=updated&per_page=5`;

/**
 * EnQueEstoyTrabajando — Plantilla
 * Reimplementa en React la misma lógica de script.js: llama al API REST
 * de GitHub, maneja carga/error, y muestra los repos más recientes.
 */
function EnQueEstoyTrabajando() {
  const [repos, setRepos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [intentos, setIntentos] = useState(0);

  useEffect(() => {
    // TODO 1: declara una función async "obtenerRepos" que:
    //   - llame a setCargando(true) y setError(null)
    //   - haga fetch(URL_REPOS) dentro de un try/catch
    //   - si !respuesta.ok, revise si respuesta.status === 403 para dar
    //     un mensaje específico sobre el límite de peticiones de GitHub,
    //     o un mensaje genérico en otro caso (usa throw new Error(...))
    //   - convierta la respuesta con .json() y la guarde con setRepos()
    //   - en el catch, guarde el mensaje con setError()
    //   - en el finally, llame a setCargando(false)
    async function obtenerRepos() {
      setCargando(true);
      setError(null);

      try {
        const respuesta = await fetch(URL_REPOS);

        if (!respuesta.ok) {
          if (respuesta.status === 403) {
            throw new Error("Se alcanzó el límite de peticiones. Intenta más tarde.");
          }
          throw new Error("No se pudieron obtener los repositorios.")
        }
        const datos = await respuesta.json();
        setRepos(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }

    obtenerRepos();

    // TODO 2: invoca la función aquí dentro del useEffect.

    // TODO 3: usa [intentos] como arreglo de dependencias, para que
    //         "Reintentar" pueda forzar una nueva petición.
  }, [intentos]); // <- corrige el arreglo de dependencias (ver TODO 3)

  function manejarReintentar() {
    setIntentos((valorAnterior) => valorAnterior + 1);
  }

  return (
    <section id="trabajando" className="trabajando">
      <div className="contenedor">
        <h2>En qué estoy trabajando</h2>
        <p className="seccion-subtitulo">
          Mis 5 repositorios más recientes en GitHub, actualizados en tiempo real.
        </p>

        {/* TODO 5: renderiza condicionalmente:
            - si cargando -> un <div className="estado-repos"> con spinner y texto
            - si error    -> un mensaje de error + botón que llame a manejarReintentar
            - si hay repos -> un <div className="grid-repos"> con un
              <TarjetaRepositorio> por cada repo (recuerda la prop "key") */}
        {cargando && (
          <div className="estado-repos">
            <div className="spinner"></div>
            <p>Cargando repositorios...</p>
          </div>
        )}
        {!cargando && error && (
          <div className="error-repos">
            <p>{error}</p>
            <button onClick={manejarReintentar}>Reintentar</button>
          </div>
        )}
        {!cargando && !error && (
          <div className="grid-repos">
            {repos.map((repo) => (
              <TarjetaRepositorio key={repo.id} {...repo} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default EnQueEstoyTrabajando;

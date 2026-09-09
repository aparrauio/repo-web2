/**
 * TarjetaRepositorio — Plantilla
 * Recibe props con la forma de un objeto "repo" del API de GitHub:
 *   name, description, language, stargazers_count, html_url
 */
function TarjetaRepositorio({name, description, language, stargazers_count, html_url}) {
  // TODO 2: usa valores de respaldo si description o language no existen
  //         (ej. "Sin descripción disponible." / "N/A")
  const descPagina = description || "Repositorio sin descripción"
  const lengPagina = language || "No disponible"

  // TODO 3: devuelve un <div className="tarjeta-repo"> con:
  //   - <h3><a href={html_url} target="_blank" rel="noreferrer">{name}</a></h3>
  //   - <p>{descripcion}</p>
  //   - un <div className="repo-meta"> con el lenguaje y las estrellas
  return (
    <div className="tarjeta-repo">
      <h3><a href={html_url} target="_blank" rel="noreferrer">{name}</a></h3>
      <p>{descPagina}</p>
      <div className="repo-meta">
        <span>💻 {lengPagina}</span>
        <span>⭐ {stargazers_count}</span>
      </div>
    </div>
  );
}

export default TarjetaRepositorio;

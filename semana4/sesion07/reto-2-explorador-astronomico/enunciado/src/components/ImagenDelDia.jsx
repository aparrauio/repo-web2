/**
 * ImagenDelDia — Plantilla
 * Recibe "datos", el objeto que devuelve la API de la NASA:
 *   { title, explanation, url, date, media_type }
 */
function ImagenDelDia({ datos }) {
  const { title, explanation, url, date, media_type } = datos;
  // TODO 1: extrae title, explanation, url, date y media_type de "datos"
  //         (puedes usar destructuring).

  // TODO 2: devuelve un <article className="tarjeta-apod"> que muestre:
  //         - el título en un <h2>
  //         - SI media_type === "image": una <img src={url} alt={title} />
  //         - SI media_type !== "image": un <a href={url}> que diga
  //           "Ver video en la NASA" (con target="_blank" y rel="noreferrer")
  //         - la explicación en un <p>
  //         - la fecha en un <p className="fecha">
  return (
    <article className="tarjeta-apod">
      <h2>{title}</h2>

      {media_type === 'image' ? (
        <img src={url} alt={title} />
      ) : (
        <a href={url} className="enlace-video" target="_blank">
          Ver video en web de la NASA
        </a>
      )}

      <p>{explanation}</p>
      <p className="fecha">Fecha: {date}</p>
    </article>
  )
}

export default ImagenDelDia;

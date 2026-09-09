/**
 * BotonCTA — Plantilla
 * Componente reutilizable. Debe recibir props: texto, variante, href
 * (variante puede ser "primario" o "secundario"; usa "primario" por defecto).
 */
function BotonCTA({ texto, variante = "primario", href = "#" }) {
  // TODO 2: devuelve un <a> con:
  //   - href={href}
  //   - className={`boton boton-${variante}`}
  //   - el texto como contenido
  return (
    <a href={href} className={`boton boton-${variante}`}>
      {texto}
    </a>
  );
}

export default BotonCTA;

/**
 * TarjetaServicio — Plantilla
 * Recibe props: icono, titulo, descripcion
 */
function TarjetaServicio({ icono, titulo, descripcion }) {
  // TODO 2: devuelve un <div className="tarjeta-servicio"> con:
  //   - <p className="icono">{icono}</p>
  //   - <h3>{titulo}</h3>
  //   - <p>{descripcion}</p>
  return (
    <div className="tarjeta-servicio">
      <p className="icono">{icono}</p>
      <h3>{titulo}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default TarjetaServicio;

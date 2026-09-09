/**
 * TarjetaTestimonio — Plantilla
 * Recibe props: emoji, texto, nombre, cargo
 */
function TarjetaTestimonio({ emoji, texto, nombre, cargo }) {
  // TODO 2: devuelve un <div className="tarjeta-testimonio"> con:
  //   - <p className="testimonio-emoji">{emoji}</p>
  //   - <p className="testimonio-texto">"{texto}"</p>
  //   - <p className="testimonio-nombre">{nombre}</p>
  //   - <p className="testimonio-cargo">{cargo}</p>
  return (
    <div className="tarjeta-testimonio">
      <p className="testimonio-emoji">{emoji}</p>
      <p className="testimonio-texto">"{texto}"</p>
      <p className="testimonio-nombre">{nombre}</p>
      <p className="testimonio-cargo">{cargo}</p>
    </div>
  );

}

export default TarjetaTestimonio;

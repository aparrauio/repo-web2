/**
 * EstadoError — Plantilla
 * Recibe:
 *  - mensaje: texto de error a mostrar
 *  - onReintentar: función a ejecutar cuando el usuario haga clic en "Reintentar"
 */
function EstadoError({ mensaje, onReintentar }) {
  // TODO 1: devuelve un <div className="estado-error"> con:
  //         - un <p> mostrando `⚠️ ${mensaje}`
  //         - un <button> que al hacer clic llame a onReintentar()
  return (
    <div className="estado-error">
      <p>`⚠️ ${mensaje}`</p>
      <button onClick={onReintentar}>Reintentar</button>
    </div>
  )
}

export default EstadoError;

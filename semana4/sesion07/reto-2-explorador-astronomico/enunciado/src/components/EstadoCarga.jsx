/**
 * EstadoCarga — Plantilla
 * Componente simple que se muestra mientras esperamos la respuesta del API.
 */
function EstadoCarga() {
  // TODO 1: devuelve un <div className="estado"> con una clase "spinner"
  //         (ya definida en index.css) y un texto como "Cargando imagen del día...".
  return (
    <div className="estado">
      <div className="spinner"></div>
      <p>Cargando imagen del dia...</p>
    </div>
  )
}

export default EstadoCarga;

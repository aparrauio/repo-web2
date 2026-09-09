/**
 * Encabezado — Plantilla (RETO EXTRA opcional)
 * Debe recibir la prop: totalAnimales (número)
 */
function Encabezado({ totalAnimales }) {
  // TODO 2: devuelve un <div> con:
  //         - un <h1>🦁 Mini Zoológico Interactivo</h1>
  //         - un <p className="encabezado-total"> que diga:
  //           "Tenemos {totalAnimales} animales en el zoológico"
  return (
    <div>
      <h1>🦁 Mini Zoológico Interactivo</h1>
      <p className="encabezado-total">
        Tenemos {totalAnimales} animales en el zoológico.
      </p>
    </div>
  );
}

export default Encabezado;

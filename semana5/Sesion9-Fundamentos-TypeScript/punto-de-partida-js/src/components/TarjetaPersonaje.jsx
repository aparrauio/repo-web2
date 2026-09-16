import { calcularPoder, formatearNivel } from "../utils/calculos.js";

/**
 * TarjetaPersonaje — muestra un personaje en una tarjeta de Bootstrap.
 * Recibe "personaje" y un booleano "esElMasFuerte" (para resaltar el borde).
 *
 * Nota: nada aquí impide que alguien pase un objeto sin "ataque" o con
 * "nombre" mal escrito. JavaScript solo se daría cuenta en tiempo de
 * ejecución (por ejemplo, mostrando "undefined" en la tarjeta).
 */
function TarjetaPersonaje({ personaje, esElMasFuerte }) {
  const poder = calcularPoder(personaje);

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className={`card h-100 tarjeta-personaje ${esElMasFuerte ? "mas-fuerte" : ""}`}>
        <div className="card-body text-center">
          <p className="avatar-emoji mb-2">{personaje.avatar}</p>
          <h5 className="card-title mb-1">{personaje.nombre}</h5>
          <p className="text-muted mb-2">{personaje.clase}</p>

          <span className="badge bg-secondary me-2">{formatearNivel(personaje.nivel)}</span>
          {esElMasFuerte && <span className="badge bg-warning text-dark">👑 Más fuerte</span>}

          <ul className="list-group list-group-flush mt-3 text-start">
            <li className="list-group-item d-flex justify-content-between">
              <span>❤️ Vida</span>
              <strong>{personaje.vida}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>⚔️ Ataque</span>
              <strong>{personaje.ataque}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>💥 Poder total</span>
              <strong>{poder}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TarjetaPersonaje;

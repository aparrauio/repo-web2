// TODO 1: importa el tipo Personaje
import type { Personaje } from "../types/Personaje.ts";
import { calcularPoder, formatearNivel } from "../utils/calculos.ts";

// TODO 2: define una interfaz TarjetaPersonajeProps con:
//   personaje: Personaje
//   esElMasFuerte: boolean
//
interface TarjetaPersonajeProps {
  personaje: Personaje;
  esElMasFuerte: boolean;
}

/**
 * TarjetaPersonaje — Plantilla
 * TODO 3: tipa los props del componente usando la interfaz de arriba:
 *   function TarjetaPersonaje({ personaje, esElMasFuerte }: TarjetaPersonajeProps) { ... }
 */
function TarjetaPersonaje({ personaje, esElMasFuerte }: TarjetaPersonajeProps) {
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

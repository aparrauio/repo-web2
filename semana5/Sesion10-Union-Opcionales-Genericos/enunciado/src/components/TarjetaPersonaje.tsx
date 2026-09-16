import type { Personaje } from "../types/Personaje.ts";
import { calcularPoder, formatearNivel } from "../utils/calculos.ts";
// TODO 1: importa el componente EstadoBadge
import EstadoBadge from "./EstadoBadge.tsx";

interface TarjetaPersonajeProps {
  personaje: Personaje;
  esElMasFuerte: boolean;
}

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

          {/* TODO 2: agrega aquí <EstadoBadge estado={personaje.estado} /> */}

          <EstadoBadge estado={personaje.estado} />

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

          {/* TODO 3: agrega aquí una sección "Equipo" que SOLO se muestre
              si personaje.arma o personaje.escudo están definidos.
              Usa la clase CSS "seccion-equipo" (ya definida en index.css).

          {(personaje.arma || personaje.escudo) && (
            <div className="seccion-equipo text-start">
              <strong>Equipo:</strong>
              {personaje.arma && <p className="mb-0">🗡️ {personaje.arma}</p>}
              {personaje.escudo && <p className="mb-0">🛡️ {personaje.escudo}</p>}
            </div>
          )}
          */}
          {(personaje.arma || personaje.escudo) && (
            <div className="seccion-equipo text-start">
              <strong>Equipo:</strong>
              {personaje.arma && <p className="mb-0">🗡️ {personaje.arma}</p>}
              {personaje.escudo && <p className="mb-0">🛡️ {personaje.escudo}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TarjetaPersonaje;

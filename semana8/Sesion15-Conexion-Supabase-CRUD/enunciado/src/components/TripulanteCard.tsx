import type { Tripulante } from "../types/Tripulante.ts";
import BarraOxigeno from "./BarraOxigeno.tsx";
import InsigniaMision from "./InsigniaMision.tsx";

interface TripulanteCardProps {
  tripulante: Tripulante;
  onVerDetalle: (id: number) => void;
  onEditar: (id: number) => void;
  onEliminar: (id: number) => void;
}

/** TripulanteCard — heredado de la Sesión 12, sin cambios. */
function TripulanteCard({ tripulante, onVerDetalle, onEditar, onEliminar }: TripulanteCardProps) {
  return (
    <div className="card tripulante-card h-100">
      <div className="card-body text-center">
        <p className="avatar-emoji mb-2">{tripulante.avatar}</p>
        <h5 className="card-title mb-1">{tripulante.nombre}</h5>
        <p className="text-muted mb-3">{tripulante.rol}</p>

        <div className="mb-3">
          <small className="d-block mb-1">Nivel de oxígeno</small>
          <BarraOxigeno nivel={tripulante.nivel_oxigeno} />
        </div>

        <InsigniaMision enMision={tripulante.en_mision} />

        <div className="botones-tarjeta d-flex gap-2 justify-content-center mt-3">
          <button className="btn btn-sm btn-outline-info" onClick={() => onVerDetalle(tripulante.id)}>
            Ver detalles
          </button>
          <button className="btn btn-sm btn-outline-light" onClick={() => onEditar(tripulante.id)}>
            Editar
          </button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => onEliminar(tripulante.id)}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TripulanteCard;

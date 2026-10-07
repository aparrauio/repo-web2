import type { Tripulante } from "../types/Tripulante.ts";
import BarraOxigeno from "./BarraOxigeno.tsx";
import InsigniaMision from "./InsigniaMision.tsx";

interface DetalleTripulanteProps {
  tripulante: Tripulante;
  onVolver: () => void;
}

function DetalleTripulante({ tripulante, onVolver }: DetalleTripulanteProps) {
  return (
    <div className="container py-5">
      <button className="btn btn-outline-light mb-4" onClick={onVolver}>← Volver a la lista</button>
      <div className="detalle-tripulante">
        <div className="text-center mb-4">
          <p className="avatar-emoji-grande mb-2">{tripulante.avatar}</p>
          <h2>{tripulante.nombre}</h2>
          <p className="text-muted">{tripulante.rol}</p>
          <InsigniaMision enMision={tripulante.en_mision} />
        </div>
        <div className="detalle-seccion">
          <h5>Nivel de oxígeno</h5>
          <BarraOxigeno nivel={tripulante.nivel_oxigeno} />
        </div>
        {tripulante.especialidad && (
          <div className="detalle-seccion"><h5>Especialidad</h5><p>{tripulante.especialidad}</p></div>
        )}
        {tripulante.bio && (
          <div className="detalle-seccion"><h5>Biografía</h5><p>{tripulante.bio}</p></div>
        )}
      </div>
    </div>
  );
}

export default DetalleTripulante;

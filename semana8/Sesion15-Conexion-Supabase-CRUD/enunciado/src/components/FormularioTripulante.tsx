import { useState } from "react";
import type { Tripulante } from "../types/Tripulante.ts";

interface FormularioTripulanteProps {
  tripulanteInicial?: Tripulante;
  onGuardar: (datos: Omit<Tripulante, "id">) => void;
  onCancelar: () => void;
}

/**
 * FormularioTripulante — heredado de la Sesión 12, con los nombres de
 * campo ajustados a snake_case (nivel_oxigeno, en_mision) para coincidir
 * con las columnas reales de Supabase.
 */
function FormularioTripulante({ tripulanteInicial, onGuardar, onCancelar }: FormularioTripulanteProps) {
  const [nombre, setNombre] = useState(tripulanteInicial?.nombre ?? "");
  const [rol, setRol] = useState(tripulanteInicial?.rol ?? "");
  const [avatar, setAvatar] = useState(tripulanteInicial?.avatar ?? "🧑‍🚀");
  const [nivelOxigeno, setNivelOxigeno] = useState(tripulanteInicial?.nivel_oxigeno ?? 100);
  const [enMision, setEnMision] = useState(tripulanteInicial?.en_mision ?? false);

  function manejarEnvio(evento: React.FormEvent) {
    evento.preventDefault();
    onGuardar({
      nombre,
      rol,
      avatar,
      nivel_oxigeno: nivelOxigeno,
      en_mision: enMision,
    });
  }

  return (
    <form onSubmit={manejarEnvio} className="formulario-tripulante">
      <h4 className="mb-4">{tripulanteInicial ? "Editar tripulante" : "Nuevo tripulante"}</h4>

      <div className="mb-3">
        <label className="form-label">Nombre</label>
        <input className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
      </div>

      <div className="mb-3">
        <label className="form-label">Rol</label>
        <input className="form-control" value={rol} onChange={(e) => setRol(e.target.value)} required />
      </div>

      <div className="mb-3">
        <label className="form-label">Avatar (emoji)</label>
        <input className="form-control" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
      </div>

      <div className="mb-3">
        <label className="form-label">Nivel de oxígeno (0-100)</label>
        <input
          type="number"
          className="form-control"
          min={0}
          max={100}
          value={nivelOxigeno}
          onChange={(e) => setNivelOxigeno(Number(e.target.value))}
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={enMision}
          onChange={(e) => setEnMision(e.target.checked)}
        />
        <label className="form-check-label">En misión</label>
      </div>

      <div className="d-flex gap-2">
        <button type="submit" className="btn btn-primary">Guardar</button>
        <button type="button" className="btn btn-outline-light" onClick={onCancelar}>Cancelar</button>
      </div>
    </form>
  );
}

export default FormularioTripulante;

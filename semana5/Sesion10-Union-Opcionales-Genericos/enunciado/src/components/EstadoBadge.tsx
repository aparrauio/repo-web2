// TODO 1: importa el tipo EstadoPersonaje
import type { EstadoPersonaje } from "../types/Personaje.ts";

/**
 * EstadoBadge — Plantilla
 * TODO 2: define las props con una interfaz:
 *   interface EstadoBadgeProps { estado: EstadoPersonaje; }
 *
 * TODO 3: usa un switch sobre "estado" para devolver un <span> de
 * Bootstrap distinto según el valor:
 *   "activo"    -> <span className="badge bg-success">Activo</span>
 *   "herido"    -> <span className="badge bg-warning text-dark">Herido</span>
 *   "derrotado" -> <span className="badge bg-danger">Derrotado</span>
 */

interface EstadoBadgeProps { estado: EstadoPersonaje; }

function EstadoBadge({ estado } : EstadoBadgeProps) {
  switch (estado) {
    case "activo":
      return <span className="badge bg-success">Activo</span>;
    case "herido":
      return <span className="badge bg-warning text-dark">Herido</span>
    case "derrotado":
      return <span className="badge bg-danger">Derrotado</span>
  }
}

export default EstadoBadge;

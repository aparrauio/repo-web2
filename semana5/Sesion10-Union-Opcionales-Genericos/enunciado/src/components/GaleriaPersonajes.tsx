import { personajes } from "../data/personajes.ts";
import { obtenerPersonajeMasFuerte } from "../utils/calculos.ts";
import TarjetaPersonaje from "./TarjetaPersonaje.tsx";

/**
 * GaleriaPersonajes — heredado de la Sesión 9, sin cambios necesarios hoy.
 */
function GaleriaPersonajes() {
  const masFuerte = obtenerPersonajeMasFuerte(personajes);

  return (
    <div className="container py-5">
      <h1 className="titulo-app text-center mb-1">⚔️ Ficha de Personajes RPG</h1>
      <p className="text-center text-secondary mb-5">Edición Batalla — tipos union, opcionales y genéricos</p>

      <div className="row">
        {personajes.map((personaje) => (
          <TarjetaPersonaje
            key={personaje.id}
            personaje={personaje}
            esElMasFuerte={personaje.id === masFuerte.id}
          />
        ))}
      </div>
    </div>
  );
}

export default GaleriaPersonajes;

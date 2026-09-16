import { personajes } from "../data/personajes.ts";
import { obtenerPersonajeMasFuerte } from "../utils/calculos.ts";
import TarjetaPersonaje from "./TarjetaPersonaje.tsx";

/**
 * GaleriaPersonajes — Plantilla
 * No recibe props. Una vez que completes los TODOs de calculos.ts,
 * personajes.ts y TarjetaPersonaje.tsx, este componente debería funcionar
 * sin cambios (ya que usa los tipos "por debajo").
 */
function GaleriaPersonajes() {
  const masFuerte = obtenerPersonajeMasFuerte(personajes);

  return (
    <div className="container py-5">
      <h1 className="titulo-app text-center mb-1">🗡️ Ficha de Personajes RPG</h1>
      <p className="text-center text-secondary mb-5">Versión TypeScript</p>

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

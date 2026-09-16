import { personajes } from "../data/personajes.js";
import { obtenerPersonajeMasFuerte } from "../utils/calculos.js";
import TarjetaPersonaje from "./TarjetaPersonaje.jsx";

/**
 * GaleriaPersonajes — recorre el arreglo de personajes y renderiza una
 * tarjeta por cada uno, resaltando al personaje con mayor poder total.
 */
function GaleriaPersonajes() {
  const masFuerte = obtenerPersonajeMasFuerte(personajes);

  return (
    <div className="container py-5">
      <h1 className="titulo-app text-center mb-1">🗡️ Ficha de Personajes RPG</h1>
      <p className="text-center text-secondary mb-5">Versión JavaScript (sin tipos)</p>

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

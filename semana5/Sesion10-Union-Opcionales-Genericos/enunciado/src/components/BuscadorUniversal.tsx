import { useState } from "react";
import { personajes } from "../data/personajes.ts";
// TODO 1: importa items desde "../data/items.ts"
import { items } from "../data/items.ts";
// TODO 2: importa buscarPorId desde "../utils/genericos.ts"
import { buscarPorId } from "../utils/genericos.ts";

type ColeccionElegida = "personajes" | "items"; // tipo union para el <select>

/**
 * BuscadorUniversal — Plantilla
 * Demuestra el VALOR REAL de las funciones genéricas: una sola función
 * (buscarPorId) sirve para buscar tanto en "personajes" como en "items",
 * sin escribir dos versiones casi idénticas de la misma lógica.
 */
function BuscadorUniversal() {
  const [coleccion, setColeccion] = useState<ColeccionElegida>("personajes");
  const [idBuscado, setIdBuscado] = useState("");

  // TODO 3: aquí debes llamar a buscarPorId() con la colección correcta
  // según el valor de "coleccion". Algo como:
  //
  // const resultado =
  //   coleccion === "personajes"
  //     ? buscarPorId(personajes, Number(idBuscado))
  //     : buscarPorId(items, Number(idBuscado));

  const resultado =
    idBuscado === ""
      ? undefined
      : coleccion === "personajes"
        ? buscarPorId(personajes, Number(idBuscado))
        : buscarPorId(items, Number(idBuscado));

  return (
    <div className="buscador-universal">
      <h4>🔎 Buscador universal (por ID)</h4>
      <p className="text-muted">
        Usa la misma función <code>buscarPorId()</code> para buscar en dos
        colecciones distintas: personajes o ítems.
      </p>

      <div className="row g-2 align-items-center">
        <div className="col-auto">
          <select
            className="form-select"
            value={coleccion}
            onChange={(e) => setColeccion(e.target.value as ColeccionElegida)}
          >
            <option value="personajes">Personajes</option>
            <option value="items">Ítems</option>
          </select>
        </div>
        <div className="col-auto">
          <input
            type="number"
            className="form-control"
            placeholder="ID a buscar"
            value={idBuscado}
            onChange={(e) => setIdBuscado(e.target.value)}
          />
        </div>
      </div>

      {/* TODO 4: si "resultado" existe, muéstralo dentro de un
          <div className="resultado-busqueda">, con su nombre y sus demás
          propiedades relevantes (usa JSON.stringify(resultado) si quieres
          algo rápido de probar antes de darle un formato más lindo). */}
          <div className="resultado-busqueda">
            {resultado ? (
              <strong>{resultado.nombre}</strong>
            ) : (
              <span className="text-danger">No se encontró ningún elemento con id {idBuscado}.</span>
            )}
          </div>
    </div>
  );
}

export default BuscadorUniversal;

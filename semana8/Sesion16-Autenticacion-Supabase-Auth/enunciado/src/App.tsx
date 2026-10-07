import { useState, useEffect } from "react";
// TODO 1: importa el cliente, el tipo Session, y las funciones de auth
// import { supabase } from "./lib/supabaseClient.ts";
// import type { Session } from "@supabase/supabase-js";
// import { obtenerSesionActual, cerrarSesion } from "./services/authService.ts";
import type { Tripulante } from "./types/Tripulante.ts";
import {
  obtenerTripulantes,
  crearTripulante,
  actualizarTripulante,
  eliminarTripulante,
} from "./services/tripulantesService.ts";
import TripulanteCard from "./components/TripulanteCard.tsx";
import FormularioTripulante from "./components/FormularioTripulante.tsx";
import DetalleTripulante from "./components/DetalleTripulante.tsx";
import EstadoCargaPantalla from "./components/EstadoCargaPantalla.tsx";
import EstadoErrorPantalla from "./components/EstadoErrorPantalla.tsx";
import PantallaAuth from "./components/PantallaAuth.tsx";

type Vista = "lista" | "nuevo" | "editar" | "detalle";

function App() {
  // TODO 2: declara el estado de sesión, tipado: useState<Session | null>(null)
  const [sesion, setSesion] = useState(null);
  const [cargandoSesion, setCargandoSesion] = useState(true);

  const [tripulantes, setTripulantes] = useState<Tripulante[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [vista, setVista] = useState<Vista>("lista");
  const [idSeleccionado, setIdSeleccionado] = useState<number | null>(null);
  const [recargar, setRecargar] = useState(0);

  // TODO 3: useEffect para manejar la sesión (ver PISTA 4 del enunciado)
  useEffect(() => {
    // TODO: implementa el manejo de sesión aquí
  }, []);

  useEffect(() => {
    if (!sesion) return;
    async function cargarTripulantes() {
      setCargando(true);
      setError(null);
      try {
        const datos = await obtenerTripulantes();
        setTripulantes(datos);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido.");
      } finally {
        setCargando(false);
      }
    }
    cargarTripulantes();
  }, [sesion, recargar]);

  async function manejarCrear(datos: Omit<Tripulante, "id" | "user_id">) {
    // TODO 4: llama a crearTripulante(datos, sesion.user.id)
  }

  async function manejarActualizar(id: number, datos: Omit<Tripulante, "id" | "user_id">) {
    try {
      const actualizado = await actualizarTripulante(id, datos);
      setTripulantes((lista) => lista.map((t) => (t.id === id ? actualizado : t)));
      setVista("lista");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo actualizar.");
    }
  }

  async function manejarEliminar(id: number) {
    try {
      await eliminarTripulante(id);
      setTripulantes((lista) => lista.filter((t) => t.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo eliminar.");
    }
  }

  // TODO 5: escribe manejarCerrarSesion(), que llama a cerrarSesion()
  async function manejarCerrarSesion() {
    // TODO: implementa
  }

  const tripulanteSeleccionado = tripulantes.find((t) => t.id === idSeleccionado);

  if (cargandoSesion) {
    return <EstadoCargaPantalla />;
  }

  // TODO 6: si NO hay sesión, retorna <PantallaAuth /> aquí.

  if (cargando) {
    return <EstadoCargaPantalla />;
  }

  if (error) {
    return <EstadoErrorPantalla mensaje={error} onReintentar={() => setRecargar((v) => v + 1)} />;
  }

  if (vista === "detalle" && tripulanteSeleccionado) {
    return <DetalleTripulante tripulante={tripulanteSeleccionado} onVolver={() => setVista("lista")} />;
  }

  if (vista === "nuevo" || vista === "editar") {
    return (
      <div className="container py-5" style={{ maxWidth: "600px" }}>
        <FormularioTripulante
          tripulanteInicial={vista === "editar" ? tripulanteSeleccionado : undefined}
          onGuardar={(datos) => {
            if (vista === "editar" && idSeleccionado !== null) {
              manejarActualizar(idSeleccionado, datos);
            } else {
              manejarCrear(datos);
            }
          }}
          onCancelar={() => setVista("lista")}
        />
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="barra-usuario">
        <div>
          <span className="badge-conexion">🟢 Conectado a Supabase</span>
          {/* TODO 7: muestra el correo del usuario: sesion.user.email */}
        </div>
        <button className="btn btn-outline-light btn-sm" onClick={manejarCerrarSesion}>
          Cerrar sesión
        </button>
      </div>

      <h1 className="titulo-app mb-1">🚀 Centro de Comando Espacial</h1>
      <p className="subtitulo-app mb-4">Tu tripulación, protegida con autenticación</p>

      <div className="mb-4">
        <button className="btn btn-primary" onClick={() => setVista("nuevo")}>+ Nuevo tripulante</button>
      </div>

      <div className="row">
        {tripulantes.map((tripulante) => (
          <div className="col-12 col-md-6 col-lg-4 mb-4" key={tripulante.id}>
            <TripulanteCard
              tripulante={tripulante}
              onVerDetalle={(id) => { setIdSeleccionado(id); setVista("detalle"); }}
              onEditar={(id) => { setIdSeleccionado(id); setVista("editar"); }}
              onEliminar={manejarEliminar}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

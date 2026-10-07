import { useState, useEffect } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "./lib/supabaseClient.ts";
import { obtenerSesionActual, cerrarSesion } from "./services/authService.ts";
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
  const [sesion, setSesion] = useState<Session | null>(null);
  const [cargandoSesion, setCargandoSesion] = useState(true);

  const [tripulantes, setTripulantes] = useState<Tripulante[]>([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [vista, setVista] = useState<Vista>("lista");
  const [idSeleccionado, setIdSeleccionado] = useState<number | null>(null);
  const [recargar, setRecargar] = useState(0);

  useEffect(() => {
    obtenerSesionActual().then((sesionGuardada) => {
      setSesion(sesionGuardada);
      setCargandoSesion(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_evento, nuevaSesion) => {
      setSesion(nuevaSesion);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
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
    if (!sesion) return;
    try {
      const nuevo = await crearTripulante(datos, sesion.user.id);
      setTripulantes((lista) => [...lista, nuevo]);
      setVista("lista");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo crear el tripulante.");
    }
  }

  async function manejarActualizar(id: number, datos: Omit<Tripulante, "id" | "user_id">) {
    try {
      const actualizado = await actualizarTripulante(id, datos);
      setTripulantes((lista) => lista.map((t) => (t.id === id ? actualizado : t)));
      setVista("lista");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo actualizar el tripulante.");
    }
  }

  async function manejarEliminar(id: number) {
    try {
      await eliminarTripulante(id);
      setTripulantes((lista) => lista.filter((t) => t.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo eliminar el tripulante.");
    }
  }

  async function manejarCerrarSesion() {
    await cerrarSesion();
  }

  const tripulanteSeleccionado = tripulantes.find((t) => t.id === idSeleccionado);

  if (cargandoSesion) {
    return <EstadoCargaPantalla />;
  }

  if (!sesion) {
    return <PantallaAuth />;
  }

  if (cargando) {
    return <EstadoCargaPantalla />;
  }

  if (error) {
    return (
      <EstadoErrorPantalla
        mensaje={error}
        onReintentar={() => setRecargar((valor) => valor + 1)}
      />
    );
  }

  if (vista === "detalle" && tripulanteSeleccionado) {
    return (
      <DetalleTripulante
        tripulante={tripulanteSeleccionado}
        onVolver={() => setVista("lista")}
      />
    );
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
          <p className="correo-usuario mb-0">Sesión: {sesion.user.email}</p>
        </div>
        <button className="btn btn-outline-light btn-sm" onClick={manejarCerrarSesion}>
          Cerrar sesión
        </button>
      </div>

      <h1 className="titulo-app mb-1">🚀 Centro de Comando Espacial</h1>
      <p className="subtitulo-app mb-4">Tu tripulación, protegida con autenticación</p>

      <div className="mb-4">
        <button className="btn btn-primary" onClick={() => setVista("nuevo")}>
          + Nuevo tripulante
        </button>
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

      {tripulantes.length === 0 && (
        <p className="text-center text-muted mt-5">
          Todavía no tienes tripulantes. Agrega uno con el botón de arriba.
        </p>
      )}
    </div>
  );
}

export default App;

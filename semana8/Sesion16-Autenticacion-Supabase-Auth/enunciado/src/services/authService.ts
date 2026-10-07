// TODO 1: importa el cliente y el tipo Session
// import { supabase } from "../lib/supabaseClient.ts";
// import type { Session } from "@supabase/supabase-js";

/**
 * registrarUsuario — Plantilla
 * TODO 2: implementa usando supabase.auth.signUp({ email, password }).
 */
export async function registrarUsuario(email, password) {
  // TODO: implementa y tipa: (email: string, password: string) => Promise<void>
}

/**
 * iniciarSesion — Plantilla
 * TODO 3: implementa usando supabase.auth.signInWithPassword({ email, password }).
 */
export async function iniciarSesion(email, password) {
  // TODO: implementa y tipa: (email: string, password: string) => Promise<void>
}

/**
 * cerrarSesion — Plantilla
 * TODO 4: implementa usando supabase.auth.signOut().
 */
export async function cerrarSesion() {
  // TODO: implementa y tipa: () => Promise<void>
}

/**
 * obtenerSesionActual — Plantilla
 * TODO 5: implementa usando supabase.auth.getSession(), y devuelve data.session.
 */
export async function obtenerSesionActual() {
  // TODO: implementa y tipa: () => Promise<Session | null>
}

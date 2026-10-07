import { supabase } from "../lib/supabaseClient.ts";
import type { Session } from "@supabase/supabase-js";

export async function registrarUsuario(email: string, password: string): Promise<void> {
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) throw new Error(error.message);
}

export async function iniciarSesion(email: string, password: string): Promise<void> {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);
}

export async function cerrarSesion(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function obtenerSesionActual(): Promise<Session | null> {
  const { data } = await supabase.auth.getSession();
  return data.session;
}

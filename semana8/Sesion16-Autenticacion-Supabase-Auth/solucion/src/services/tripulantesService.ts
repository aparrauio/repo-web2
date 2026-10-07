import { supabase } from "../lib/supabaseClient.ts";
import type { Tripulante } from "../types/Tripulante.ts";

const NOMBRE_TABLA = "tripulantes";

export async function obtenerTripulantes(): Promise<Tripulante[]> {
  const { data, error } = await supabase
    .from(NOMBRE_TABLA)
    .select("*")
    .order("id", { ascending: true });

  if (error) throw new Error(error.message);
  return data as Tripulante[];
}

export async function crearTripulante(
  datos: Omit<Tripulante, "id" | "user_id">,
  userId: string
): Promise<Tripulante> {
  const { data, error } = await supabase
    .from(NOMBRE_TABLA)
    .insert({ ...datos, user_id: userId })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as Tripulante;
}

export async function actualizarTripulante(
  id: number,
  datos: Omit<Tripulante, "id" | "user_id">
): Promise<Tripulante> {
  const { data, error } = await supabase
    .from(NOMBRE_TABLA)
    .update(datos)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as Tripulante;
}

export async function eliminarTripulante(id: number): Promise<void> {
  const { error } = await supabase.from(NOMBRE_TABLA).delete().eq("id", id);
  if (error) throw new Error(error.message);
}

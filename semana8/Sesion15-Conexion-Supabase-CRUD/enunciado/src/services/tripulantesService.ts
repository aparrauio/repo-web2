// TODO 1: importa el cliente y el tipo
import { supabase } from "../lib/supabaseClient.ts";
import type { Tripulante } from "../types/Tripulante.ts";

const NOMBRE_TABLA = "tripulantes";

/**
 * obtenerTripulantes — Plantilla
 * TODO 2: implementa, usando:
 *   supabase.from(NOMBRE_TABLA).select("*").order("id", { ascending: true })
 * Si hay error, lanza un Error con error.message.
 * Devuelve data tipado como Tripulante[].
 */
export async function obtenerTripulantes(): Promise<Tripulante[]> {
  // TODO: implementa y tipa el retorno como Promise<Tripulante[]>
  const { data, error } = await supabase
    .from(NOMBRE_TABLA)
    .select('*')
    .order('id', { ascending: true });
  
  if (error) {
    throw new Error(error.message);
  }
  return data as Tripulante[];
}

/**
 * crearTripulante — Plantilla
 * TODO 3: implementa, usando:
 *   supabase.from(NOMBRE_TABLA).insert(datos).select().single()
 */
export async function crearTripulante(datos: Omit<Tripulante, "id">): Promise<Tripulante>{
  // TODO: implementa y tipa:
  //   (datos: Omit<Tripulante, "id">) => Promise<Tripulante>
  const { data, error } = await supabase
    .from(NOMBRE_TABLA)
    .insert(datos)
    .select()
    .single()

  if (error) {
    throw new Error(error.message);
  }
  return data as Tripulante;
}

/**
 * actualizarTripulante — Plantilla
 * TODO 4: implementa, usando:
 *   supabase.from(NOMBRE_TABLA).update(datos).eq("id", id).select().single()
 */
export async function actualizarTripulante(id: number, datos: Omit<Tripulante, "id">): Promise<Tripulante> {
  // TODO: implementa y tipa:
  //   (id: number, datos: Omit<Tripulante, "id">) => Promise<Tripulante>
  const { data, error } = await supabase
    .from(NOMBRE_TABLA)
    .update(datos)
    .eq("id", id)
    .select()
    .single()

  if (error) {
    throw new Error(error.message);
  }
  return data as Tripulante;
}

/**
 * eliminarTripulante — Plantilla
 * TODO 5: implementa, usando:
 *   supabase.from(NOMBRE_TABLA).delete().eq("id", id)
 */
export async function eliminarTripulante(id: number): Promise<void> {
  // TODO: implementa y tipa: (id: number) => Promise<void>
  const { error } = await supabase
    .from(NOMBRE_TABLA)
    .delete()
    .eq("id", id)

  if (error) {
    throw new Error(error.message);
  }
}

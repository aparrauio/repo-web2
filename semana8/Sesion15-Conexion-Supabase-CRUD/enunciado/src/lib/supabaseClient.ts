// TODO 1: importa createClient desde "@supabase/supabase-js"
import { createClient } from "@supabase/supabase-js";

// TODO 2: lee las dos variables de entorno (definidas en tu archivo .env):
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// TODO 3: crea y exporta el cliente de Supabase:
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Este archivo es el ÚNICO lugar donde se crea el cliente. Todos los
// servicios (tripulantesService.ts, y en la Sesión 16 también la
// autenticación) lo importan desde aquí.

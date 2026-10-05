# Pista — Conexión a Supabase y CRUD tipado

## Pista 1: instalar el cliente de Supabase

```bash
npm install @supabase/supabase-js
```

## Pista 2: crear el cliente tipado

```ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

Nota el paralelo con la API key de la NASA (Sesión 7): la credencial vive
en `.env`, nunca escrita directamente en el código.

## Pista 3: leer datos (Read)

```ts
export async function obtenerTripulantes(): Promise<Tripulante[]> {
  const { data, error } = await supabase
    .from("tripulantes")
    .select("*")
    .order("id", { ascending: true });

  if (error) throw new Error(error.message);
  return data as Tripulante[];
}
```

`.from("tripulantes")` apunta a la tabla; `.select("*")` es el equivalente
a `SELECT * FROM tripulantes` que viste en la sesión anterior.

## Pista 4: crear un registro (Create)

```ts
export async function crearTripulante(datos: Omit<Tripulante, "id">): Promise<Tripulante> {
  const { data, error } = await supabase
    .from("tripulantes")
    .insert(datos)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as Tripulante;
}
```

`.insert(datos)` genera un `INSERT INTO tripulantes (...) VALUES (...)`.
`.select().single()` le pide a Supabase que devuelva la fila recién creada
(incluyendo el `id` que la base de datos generó automáticamente).

## Pista 5: actualizar y eliminar (Update / Delete)

```ts
export async function actualizarTripulante(id: number, datos: Omit<Tripulante, "id">): Promise<Tripulante> {
  const { data, error } = await supabase
    .from("tripulantes")
    .update(datos)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as Tripulante;
}

export async function eliminarTripulante(id: number): Promise<void> {
  const { error } = await supabase
    .from("tripulantes")
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
}
```

`.eq("id", id)` es el `WHERE id = ...` que ya viste la sesión pasada —
SIEMPRE debe ir antes de `.update()`/`.delete()`, o se afectarían todas
las filas.

## Pista 6: cargar los datos al iniciar la app

```tsx
const [tripulantes, setTripulantes] = useState<Tripulante[]>([]);
const [cargando, setCargando] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  async function cargarDatos() {
    setCargando(true);
    setError(null);
    try {
      const datos = await obtenerTripulantes();
      setTripulantes(datos);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setCargando(false);
    }
  }
  cargarDatos();
}, []);
```

Este patrón (`cargando`/`error`/datos + `useEffect`) es exactamente el
mismo que usaste con la API de GitHub y de la NASA — Supabase no es
distinto: también es una llamada asíncrona a un servidor externo.

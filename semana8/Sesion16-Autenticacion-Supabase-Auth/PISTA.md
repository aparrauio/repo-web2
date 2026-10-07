# Pista — Autenticación con Supabase Auth

## Pista 1: registrar un usuario

```ts
export async function registrarUsuario(email: string, password: string): Promise<void> {
  const { error } = await supabase.auth.signUp({ email, password });
  if (error) throw new Error(error.message);
}
```

## Pista 2: iniciar sesión

```ts
export async function iniciarSesion(email: string, password: string): Promise<void> {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw new Error(error.message);
}
```

## Pista 3: cerrar sesión

```ts
export async function cerrarSesion(): Promise<void> {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
```

## Pista 4: obtener la sesión actual y escuchar cambios

```ts
import type { Session } from "@supabase/supabase-js";

export async function obtenerSesionActual(): Promise<Session | null> {
  const { data } = await supabase.auth.getSession();
  return data.session;
}
```

En `App.tsx`:

```tsx
const [sesion, setSesion] = useState<Session | null>(null);
const [cargandoSesion, setCargandoSesion] = useState(true);

useEffect(() => {
  obtenerSesionActual().then((s) => {
    setSesion(s);
    setCargandoSesion(false);
  });

  const { data: listener } = supabase.auth.onAuthStateChange((_evento, nuevaSesion) => {
    setSesion(nuevaSesion);
  });

  return () => listener.subscription.unsubscribe();
}, []);
```

## Pista 5: decidir qué mostrar según la sesión

```tsx
if (cargandoSesion) return <EstadoCargaPantalla />;
if (!sesion) return <PantallaAuth />;
// ... si hay sesión, se muestra el Centro de Comando normal
```

## Pista 6: incluir el user_id al crear un tripulante

```ts
export async function crearTripulante(
  datos: Omit<Tripulante, "id" | "user_id">,
  userId: string
): Promise<Tripulante> {
  const { data, error } = await supabase
    .from("tripulantes")
    .insert({ ...datos, user_id: userId })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data as Tripulante;
}
```

Nota que `obtenerTripulantes()`, `actualizarTripulante()` y
`eliminarTripulante()` NO necesitan mencionar `user_id` en su código — las
políticas RLS de `migracion_auth.sql` ya filtran automáticamente según
quién hizo la petición.

## Pista 7: probar con dos cuentas

Usa una ventana normal del navegador para una cuenta, y una ventana de
incógnito para la otra — así evitas que se mezclen las sesiones guardadas.

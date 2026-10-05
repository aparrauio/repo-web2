# Reto — Centro de Comando Espacial, conectado a Supabase 🚀☁️
## Semana 8 · Sesión 15 — Conexión a Supabase y CRUD tipado

## Contexto

Ya tienes el front-end del Centro de Comando Espacial (React + TypeScript,
con CRUD completo en `useState`, de la Sesión 12). Ya tienes una tabla
`tripulantes` real en Supabase (Semana 7 · Sesión 2). Hoy conectamos ambos
mundos: la app deja de "inventar" los datos y empieza a leerlos y
escribirlos en la base de datos de verdad.

## Parte 0 — Preparar las credenciales

1. En tu proyecto de Supabase, ve a **Project Settings → API**.
2. Copia la **Project URL** y la **anon public key**.
3. En `enunciado/`, copia `.env.example` a `.env` y pega ahí esos dos
   valores:
   ```
   VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
   VITE_SUPABASE_ANON_KEY=tu-clave-anonima-publica
   ```
4. Si no tienes la tabla `tripulantes` todavía, ejecuta
   `supabase/schema.sql` en el SQL Editor de tu proyecto.

> ℹ️ La "anon key" es pública por diseño — está pensada para usarse desde
> el navegador. La seguridad real no viene de ocultarla, sino de las
> políticas RLS que configuraremos en la Sesión 16.

## Enunciado del reto

1. **`src/lib/supabaseClient.ts`** — crea el cliente de Supabase tipado,
   usando `createClient()` de `@supabase/supabase-js`, leyendo la URL y la
   clave desde `import.meta.env`.

2. **`src/types/Tripulante.ts`** — ya está definido (igual que en la
   Sesión 12), con una diferencia: los nombres de propiedades coinciden
   EXACTAMENTE con las columnas de la tabla (`nivel_oxigeno`, `en_mision`
   en vez de `nivelOxigeno`/`enMision`), para que los datos viajen
   directos entre Supabase y React sin necesitar una capa de conversión.

3. **`src/services/tripulantesService.ts`** — completa 4 funciones
   tipadas, cada una usando el cliente de Supabase:
   - `obtenerTripulantes(): Promise<Tripulante[]>`
   - `crearTripulante(datos: Omit<Tripulante, "id">): Promise<Tripulante>`
   - `actualizarTripulante(id: number, datos: Omit<Tripulante, "id">): Promise<Tripulante>`
   - `eliminarTripulante(id: number): Promise<void>`

4. **`src/App.tsx`** — reemplaza el estado inicial fijo por una carga real:
   - Usa `useEffect` para llamar a `obtenerTripulantes()` al montar la app.
   - Maneja los 3 estados de siempre: `cargando`, `error`, y los datos.
   - Cada operación CRUD (crear, editar, eliminar) llama al servicio
     correspondiente y luego actualiza el estado local con el resultado.

## Criterios de éxito

- Al abrir la app, los tripulantes que ves son los que están GUARDADOS en
  tu tabla de Supabase (ábrela en el Table Editor para comprobarlo).
- Crear, editar o eliminar un tripulante desde la app también lo cambia en
  el Table Editor de Supabase — y viceversa (recarga la app después de
  cambiar algo manualmente en Supabase).
- Mientras se cargan los datos por primera vez, se muestra un estado de
  carga; si algo falla (ej. credenciales incorrectas), se muestra un error
  claro, no una pantalla en blanco.
- Ninguna función del servicio usa `any`; todas tienen tipos de entrada y
  de salida explícitos.

## Pensando en la próxima sesión (16)

No necesitas hacer nada todavía, pero fíjate en esto: todas las llamadas a
Supabase viven en `tripulantesService.ts`, no desparramadas por los
componentes. La próxima semana, cuando agreguemos autenticación, vamos a
modificar ESTE archivo (y las políticas RLS en Supabase) para que cada
usuario solo pueda ver o modificar su propia información — sin tocar
`TripulanteCard`, `FormularioTripulante` ni `DetalleTripulante`.

## Reto extra (opcional)

- Agrega una recarga automática de la lista cada 30 segundos con
  `setInterval` dentro de un `useEffect` (simulando datos "en vivo").
- Muestra un mensaje de éxito temporal ("Tripulante guardado ✅") después
  de cada operación CRUD exitosa.

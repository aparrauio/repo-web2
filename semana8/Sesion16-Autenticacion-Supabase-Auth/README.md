# Sesión 16 — Autenticación con Supabase Auth, sesiones y RLS
## Semana 8 · Clase 2 — Cada tripulante tiene un dueño

## Proyecto: Centro de Comando Espacial — Con Autenticación 🚀🔐

Esta sesión parte directamente del proyecto de la Sesión 15 (CRUD conectado
a Supabase). Hasta ahora, CUALQUIERA con la anon key podía leer y escribir
en la tabla `tripulantes` — una política temporal, abierta a propósito.
Hoy eso cambia: la app exige **registro e inicio de sesión**, y cada
tripulante pasa a pertenecer al usuario que lo creó.

## Qué se agrega hoy

- **Registro de usuario nuevo** (`supabase.auth.signUp`).
- **Inicio de sesión** (`supabase.auth.signInWithPassword`).
- **Cierre de sesión** (`supabase.auth.signOut`).
- **Manejo de sesión persistente**: si recargas la página, sigues
  autenticado (Supabase guarda la sesión en el navegador).
- **Políticas RLS reales**, basadas en `auth.uid()`: cada usuario solo ve,
  crea, edita y elimina SUS PROPIOS tripulantes.
- Una columna nueva en la tabla: `user_id`, que conecta cada tripulante
  con su dueño (`auth.users`).

## Estructura de carpetas

```
Sesion16-Autenticacion-Supabase-Auth/
├── README.md                 <- este archivo
├── ENUNCIADO.md               <- el reto completo
├── PISTA.md                   <- pistas para resolverlo
├── supabase/
│   └── migracion_auth.sql      <- script para agregar user_id y las políticas RLS reales
├── enunciado/                  <- proyecto con TODOs (parte de la solución de la Sesión 15)
└── solucion/                   <- proyecto completo y comentado
```

## Requisitos

- [Node.js](https://nodejs.org) 18 o superior.
- El proyecto de Supabase de la Sesión 15, con la tabla `tripulantes` ya creada.
- Haber completado (o revisado) la Sesión 15.

## Cómo ejecutar

1. En el SQL Editor de tu proyecto de Supabase, ejecuta
   `supabase/migracion_auth.sql` (agrega la columna `user_id` y reemplaza
   la política abierta por políticas reales basadas en el usuario).
2. Dentro de `enunciado/` o `solucion/`:
   ```bash
   npm install
   cp .env.example .env
   ```
3. Completa `.env` con tu `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`
   (los mismos de la Sesión 15).
4. ```bash
   npm run dev
   ```

## Cómo trabajar en clase

1. Ejecuta la migración SQL antes de tocar el código.
2. Completa los `// TODO` en `enunciado/src/services/authService.ts`,
   `enunciado/src/components/PantallaAuth.tsx` y `enunciado/src/App.tsx`.
3. Prueba con DOS cuentas distintas (dos correos diferentes): crea
   tripulantes con la primera cuenta, cierra sesión, entra con la segunda,
   y confirma que NO ve los tripulantes de la primera cuenta.
4. Compara tu resultado con `solucion/` si te quedas atascado.

**Duración sugerida:** 90 minutos.

## Nota importante sobre la migración

Si ya tenías tripulantes guardados desde la Sesión 15 (creados antes de
que existiera `user_id`), esas filas quedarán con `user_id = NULL` y,
bajo las nuevas políticas, **no serán visibles para ningún usuario** hasta
que se les asigne un dueño. Para esta sesión, lo más simple es borrar esos
datos de prueba y crear tripulantes nuevos ya autenticado.

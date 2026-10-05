# Sesión 15 — Conexión a Supabase y CRUD tipado
## Semana 8 · Clase 1 — El Centro de Comando Espacial se conecta a una base de datos real

## Proyecto: Centro de Comando Espacial — Conectado a Supabase 🚀☁️

Esta sesión conecta TODO lo construido hasta ahora con una base de datos
real. En la Sesión 2 de la Semana 7 creaste (o revisaste) la tabla
`tripulantes` directamente en la interfaz de Supabase. Hoy ese mismo
front-end de React + TypeScript (que hasta la Sesión 12 guardaba todo en
`useState`) va a leer y escribir datos **de verdad**, usando el cliente
oficial de JavaScript de Supabase.

## Por qué este diseño

El ejercicio está armado a propósito para que la **próxima sesión** (16)
pueda agregarle autenticación y políticas de seguridad (RLS) sin
reescribir nada: la capa de acceso a datos ya vive separada en
`services/tripulantesService.ts`, lista para que, más adelante, cada
operación se filtre por el usuario que inició sesión.

## Qué se construye hoy

- Conexión al proyecto de Supabase desde React, usando variables de entorno.
- Una interfaz `Tripulante` tipada que coincide con las columnas reales de la tabla.
- Un servicio (`tripulantesService.ts`) con 4 funciones tipadas: obtener, crear,
  actualizar y eliminar — cada una usando el cliente de Supabase por debajo.
- La UI de "Centro de Comando" (heredada de la Sesión 12) ahora lee y escribe
  en la base de datos real, con sus propios estados de carga y error.

## Estructura de carpetas

```
Sesion15-Conexion-Supabase-CRUD/
├── README.md                 <- este archivo
├── ENUNCIADO.md               <- el reto completo
├── PISTA.md                   <- pistas para resolverlo
├── supabase/
│   └── schema.sql              <- script para crear la tabla (por si no la tienes aún)
├── enunciado/                  <- proyecto con TODOs
└── solucion/                   <- proyecto completo y comentado
```

## Requisitos

- [Node.js](https://nodejs.org) 18 o superior.
- Un proyecto de Supabase ya creado (Semana 7 · Sesión 2). Si no lo tienes,
  usa `supabase/schema.sql` para crear la tabla `tripulantes` desde cero
  (Dashboard → SQL Editor → pega el script → Run).

## Cómo ejecutar

Dentro de `enunciado/` o `solucion/`:

```bash
npm install
cp .env.example .env
```

Abre `.env` y completa `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` con
los datos de TU proyecto (Dashboard → Project Settings → API).

```bash
npm run dev
```

## Cómo trabajar en clase

1. Si no lo hiciste la semana pasada, ejecuta `supabase/schema.sql` en el
   SQL Editor de tu proyecto para crear la tabla `tripulantes`.
2. Copia tus credenciales de API a `.env` (ver `ENUNCIADO.md` para el paso
   a paso detallado).
3. Completa los `// TODO` en `enunciado/src/services/tripulantesService.ts`
   y en `enunciado/src/App.tsx`.
4. Corre `npm run dev` y confirma que los cambios en la app aparecen
   también en el Table Editor de Supabase (¡y viceversa!).
5. Compara tu resultado con `solucion/` si te quedas atascado.

**Duración sugerida:** 90 minutos.

## Nota de seguridad (se resuelve en la Sesión 16)

Por ahora, la tabla `tripulantes` usa una política de acceso ABIERTA (ver
`supabase/schema.sql`), para que cualquiera con la clave pública (`anon
key`) pueda leer y escribir. Esto es intencional y temporal: en la Sesión
16 vamos a agregar autenticación con Supabase Auth y reemplazar esta
política por reglas de seguridad (RLS) reales, basadas en el usuario que
inició sesión.

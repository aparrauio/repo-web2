-- ============================================================
-- Centro de Comando Espacial — Esquema de la tabla "tripulantes"
-- Semana 7 · Sesión 2 (repaso) + Semana 8 · Sesión 15
-- ============================================================
-- Ejecuta este script en: Dashboard de Supabase -> SQL Editor -> New query
-- Si ya creaste la tabla en la Sesión 2 desde el Table Editor, puedes
-- saltarte el CREATE TABLE y solo revisar la parte de políticas (RLS).

-- 1. Crear la tabla (si no existe todavía)
create table if not exists tripulantes (
  id bigint generated always as identity primary key,
  nombre text not null,
  rol text not null,
  avatar text not null default '🧑‍🚀',
  nivel_oxigeno int4 not null default 100,
  en_mision boolean not null default false,
  especialidad text,
  bio text,
  created_at timestamptz not null default now()
);

-- 2. Datos de ejemplo (opcional, solo si la tabla está vacía)
insert into tripulantes (nombre, rol, avatar, nivel_oxigeno, en_mision, especialidad, bio)
values
  ('Capitana Ríos', 'Comandante', '👩‍🚀', 92, true, 'Liderazgo táctico',
   'Veterana de 12 misiones interplanetarias. Al mando de la nave desde 2041.'),
  ('Dr. Chen', 'Científico Jefe', '🧑‍🔬', 68, false, 'Xenobiología', null),
  ('Ingeniero Vex', 'Ingeniero de Vuelo', '🧑‍🚀', 25, true, null,
   'Responsable de mantener los sistemas de soporte vital operativos.')
on conflict do nothing;

-- 3. Seguridad (RLS) — NOTA IMPORTANTE
-- ------------------------------------------------------------
-- Por defecto, Supabase NO exige Row Level Security (RLS) en tablas
-- nuevas, pero es buena práctica activarlo siempre. Como esta sesión
-- TODAVÍA no implementa autenticación (eso es la Sesión 16), usamos una
-- política TEMPORAL y ABIERTA, que permite leer y escribir a cualquiera
-- que use la "anon key" pública del proyecto.
--
-- ⚠️ Esta política es solo para fines educativos durante estas dos
-- sesiones. En la Sesión 16 la reemplazaremos por reglas reales, basadas
-- en el usuario autenticado (auth.uid()).

alter table tripulantes enable row level security;

create policy "Acceso abierto temporal (Sesión 15)"
  on tripulantes
  for all
  to anon
  using (true)
  with check (true);

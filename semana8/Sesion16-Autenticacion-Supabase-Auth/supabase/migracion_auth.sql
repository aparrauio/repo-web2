-- ============================================================
-- Centro de Comando Espacial — Migración: autenticación y RLS real
-- Semana 8 · Sesión 16
-- ============================================================
-- Ejecuta este script en: Dashboard de Supabase -> SQL Editor -> New query
-- Requisito: haber creado la tabla "tripulantes" en la Sesión 15
-- (ver supabase/schema.sql de esa sesión si no la tienes todavía).

-- 1. Agregar la columna que conecta cada tripulante con su dueño.
alter table tripulantes
  add column if not exists user_id uuid references auth.users(id);

-- 2. (Opcional) Si tenías tripulantes de prueba de la Sesión 15 sin dueño,
--    bórralos para evitar filas "huérfanas" que ningún usuario podrá ver:
-- delete from tripulantes where user_id is null;

-- 3. Quitar la política ABIERTA y temporal de la Sesión 15.
drop policy if exists "Acceso abierto temporal (Sesión 15)" on tripulantes;

-- 4. Crear las políticas REALES, basadas en el usuario autenticado.
create policy "Cada usuario lee su propia tripulación"
  on tripulantes
  for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Cada usuario crea tripulantes propios"
  on tripulantes
  for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Cada usuario edita su propia tripulación"
  on tripulantes
  for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "Cada usuario elimina su propia tripulación"
  on tripulantes
  for delete
  to authenticated
  using (auth.uid() = user_id);

-- ------------------------------------------------------------
-- Con esto, un usuario SIN sesión iniciada (rol "anon") ya no tiene
-- ninguna política que le dé acceso: la tabla queda completamente
-- cerrada para quien no haya iniciado sesión.
-- ------------------------------------------------------------

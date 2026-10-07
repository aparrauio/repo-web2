# Reto — Centro de Comando Espacial, con autenticación 🚀🔐
## Semana 8 · Sesión 16 — Supabase Auth, sesiones y RLS

## Contexto

Ya tienes el Centro de Comando Espacial conectado a Supabase (Sesión 15),
con una política de acceso abierta y temporal. Hoy esa política desaparece
para siempre: la app va a exigir que cada persona se registre o inicie
sesión, y cada tripulante pasará a pertenecer a quien lo creó.

## Parte 0 — Migrar la base de datos

Antes de tocar el código, ejecuta `supabase/migracion_auth.sql` en el SQL
Editor de tu proyecto. Esto agrega la columna `user_id` a la tabla
`tripulantes` y reemplaza la política abierta por 4 políticas reales
basadas en `auth.uid()`.

## Enunciado del reto

1. **`src/services/authService.ts`** — crea 4 funciones tipadas, cada una
   usando `supabase.auth`:
   - `registrarUsuario(email: string, password: string): Promise<void>`
   - `iniciarSesion(email: string, password: string): Promise<void>`
   - `cerrarSesion(): Promise<void>`
   - `obtenerSesionActual(): Promise<Session | null>` (usa el tipo
     `Session` que exporta `@supabase/supabase-js`).

2. **`src/components/PantallaAuth.tsx`** — una pantalla con dos modos
   (login / registro), alternables con un botón de texto ("¿No tienes
   cuenta? Regístrate" / "¿Ya tienes cuenta? Inicia sesión"). Debe:
   - Tener campos controlados para `email` y `password`.
   - Llamar a `iniciarSesion()` o `registrarUsuario()` según el modo activo.
   - Mostrar un mensaje de error si Supabase rechaza el intento (ej.
     contraseña muy corta, correo ya registrado, credenciales incorrectas).

3. **`src/App.tsx`** — agrega el manejo de sesión:
   - Al montar la app, llama a `obtenerSesionActual()` para saber si ya
     hay una sesión activa (por ejemplo, si el usuario recargó la página).
   - Usa `supabase.auth.onAuthStateChange()` para reaccionar
     automáticamente cuando alguien inicia o cierra sesión.
   - Si NO hay sesión, muestra `PantallaAuth` en vez del Centro de Comando.
   - Si SÍ hay sesión, muestra la app normal, con un botón "Cerrar sesión"
     visible, y el correo del usuario actual.

4. **`src/services/tripulantesService.ts`** — ajusta las funciones para
   que trabajen con el nuevo modelo de datos:
   - `crearTripulante` debe incluir `user_id` (el id del usuario actual)
     al insertar.
   - Las demás funciones (`obtenerTripulantes`, `actualizarTripulante`,
     `eliminarTripulante`) no necesitan cambios en su código — las
     políticas RLS ya se encargan de filtrar automáticamente por usuario.

## Criterios de éxito

- Un usuario nuevo puede registrarse con correo y contraseña, y entra
  directamente a la app (o recibe un mensaje claro si Supabase pide
  confirmar el correo, según la configuración del proyecto).
- Cerrar sesión regresa a la pantalla de autenticación.
- Al recargar la página con una sesión activa, la app NO vuelve a pedir
  login (la sesión persiste).
- Con DOS cuentas distintas: cada una ve, crea, edita y elimina
  ÚNICAMENTE sus propios tripulantes — nunca los de la otra cuenta.
- Ninguna función usa `any`; el estado de sesión está tipado con `Session | null`.

## Reto extra (opcional)

- Agrega validación en el formulario: contraseña de mínimo 6 caracteres,
  formato de correo válido, antes de llamar a Supabase.
- Muestra un mensaje de bienvenida personalizado con el correo del usuario
  en la pantalla principal del Centro de Comando.

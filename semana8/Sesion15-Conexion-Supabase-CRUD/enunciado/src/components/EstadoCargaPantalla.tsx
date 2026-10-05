/**
 * EstadoCargaPantalla — pantalla completa de carga (distinta del spinner
 * pequeño de la Sesión 7/8), usada mientras se obtiene la lista inicial
 * de tripulantes desde Supabase.
 */
function EstadoCargaPantalla() {
  return (
    <div className="estado-pantalla">
      <div className="spinner-supabase"></div>
      <p>Conectando con el Centro de Comando en Supabase...</p>
    </div>
  );
}

export default EstadoCargaPantalla;

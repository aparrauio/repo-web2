interface EstadoErrorPantallaProps {
  mensaje: string;
  onReintentar: () => void;
}

/**
 * EstadoErrorPantalla — se muestra si la conexión a Supabase falla
 * (credenciales incorrectas, sin internet, política RLS que bloquea, etc.).
 */
function EstadoErrorPantalla({ mensaje, onReintentar }: EstadoErrorPantallaProps) {
  return (
    <div className="estado-pantalla">
      <div className="estado-error-pantalla">
        <p>⚠️ No se pudo conectar con Supabase.</p>
        <p style={{ fontSize: "0.85rem", opacity: 0.8 }}>{mensaje}</p>
        <button onClick={onReintentar}>Reintentar</button>
      </div>
    </div>
  );
}

export default EstadoErrorPantalla;

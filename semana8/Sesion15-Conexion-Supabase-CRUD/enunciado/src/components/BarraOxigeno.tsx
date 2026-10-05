interface BarraOxigenoProps {
  nivel: number;
}

function obtenerColorOxigeno(nivel: number): string {
  if (nivel >= 70) return "bg-success";
  if (nivel >= 30) return "bg-warning";
  return "bg-danger";
}

/** BarraOxigeno — heredado de sesiones anteriores, sin cambios. */
function BarraOxigeno({ nivel }: BarraOxigenoProps) {
  return (
    <div className="progress" role="progressbar" aria-valuenow={nivel} aria-valuemin={0} aria-valuemax={100}>
      <div className={`progress-bar ${obtenerColorOxigeno(nivel)}`} style={{ width: `${nivel}%` }}>
        {nivel}%
      </div>
    </div>
  );
}

export default BarraOxigeno;

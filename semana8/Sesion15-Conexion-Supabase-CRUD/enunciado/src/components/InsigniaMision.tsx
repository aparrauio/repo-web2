interface InsigniaMisionProps {
  enMision: boolean;
}

/** InsigniaMision — heredado de sesiones anteriores, sin cambios. */
function InsigniaMision({ enMision }: InsigniaMisionProps) {
  return enMision ? (
    <span className="badge bg-primary">🛰️ En misión</span>
  ) : (
    <span className="badge bg-secondary">🏠 En base</span>
  );
}

export default InsigniaMision;

interface InsigniaMisionProps { enMision: boolean; }

function InsigniaMision({ enMision }: InsigniaMisionProps) {
  return enMision ? (
    <span className="badge bg-primary">🛰️ En misión</span>
  ) : (
    <span className="badge bg-secondary">🏠 En base</span>
  );
}

export default InsigniaMision;

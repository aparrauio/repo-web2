/**
 * Footer — Plantilla
 * No recibe props: el contenido es fijo para esta landing page.
 */
function Footer() {
  // TODO 1: devuelve un <footer id="contacto" className="footer"> con:
  //   - un <div className="contenedor footer-inner"> que tenga dos columnas:
  //     - el nombre/logo "⚡ Pepito Pérez" y ubicación
  //     - los datos de contacto (correo, GitHub, LinkedIn)
  //   - un <p className="footer-copy"> con el texto de copyright
  return (
    <footer id="contacto" className="footer">
    <div className="contenedor footer-inner">
      <div>
        <p className="footer-logo">⚡ Pepito Pérez</p>
        <p>Consultor de Tecnología · Quito, Ecuador</p>
      </div>
      <div className="footer-contacto">
        <p>📧 pepito@consultoria.dev</p>
        <p>🔗 github.com/aparrauio</p>
        <p>💼 linkedin.com/in/aparrauio</p>
      </div>
    </div>
    <p className="footer-copy">© 2026 Pepito Pérez. Todos los derechos reservados.</p>
  </footer>
  );
}

export default Footer;

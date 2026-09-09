/**
 * Header — Plantilla
 * Recibe la prop "links": un arreglo de objetos { texto, href }.
 */
function Header({ links }) {
  // TODO 2: devuelve un <header className="header"> que contenga:
  //   - un <div className="contenedor header-inner">
  //   - dentro, un <a className="logo" href="#inicio"> con el texto "⚡ Pepito Pérez"
  //   - y un <nav className="nav"> que recorra "links" con .map() y
  //     renderice un <a> por cada uno (key={link.href}, href={link.href}, texto={link.texto})
  return (
    <header className="header">
      <div className="contenedor header-inner">
        <a href="#inicio" className="logo">⚡ Pepito Pérez</a>
        <nav className="nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.texto}</a>
          ))
          }
        </nav>
      </div>
    </header>
  );

}

export default Header;

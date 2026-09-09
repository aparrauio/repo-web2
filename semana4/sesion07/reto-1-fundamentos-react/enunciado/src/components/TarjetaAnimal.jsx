/**
 * TarjetaAnimal — Plantilla
 * Debe recibir estas props: nombre, emoji, sonido, dato
 */
function TarjetaAnimal({ nombre, sonido, emoji, dato }) {
  // TODO 2: devuelve un <div className="tarjeta-animal"> que muestre:
  //         - el emoji en un <p className="emoji">
  //         - el nombre en un <h3>
  //         - el sonido entre comillas en un <p className="sonido">
  //         - el dato curioso en un <p className="dato">
  return (
    <div className="tarjeta-animal">
      <p className="emoji">{emoji}</p>
      <h3>{nombre}</h3>
      <p className="sonido">"{sonido}"</p>
      <p className="dato">{dato}</p>
    </div>
  );
}

export default TarjetaAnimal;



const NuestraHistoria = () => {
  const historia = [
    "El Club de Pesca Carlos Paz fue fundado el 16 de mayo de 1945 por 72 vecinos de Villa Carlos Paz en una reunión realizada a orillas del río San Antonio. Diecisiete de ellos firmaron el acta fundacional.",
    "La primera Comisión Directiva se eligió el 9 de junio de ese mismo año, con Ángel Olivieri como Presidente y Enrique Duarte como Secretario.",
    "El club nació como un espacio dedicado a la pesca deportiva, logrando importantes títulos provinciales y nacionales hasta principios del siglo XXI. También se incorporaron deportes como básquetbol, rugby, tenis, ping pong y juegos de mesa.",
    "Además de su enfoque deportivo, fue un destacado epicentro social de la ciudad, con eventos, reuniones y espectáculos, además de ofrecer instalaciones como camping, embarcaderos y una pileta, aunque algunas de estas infraestructuras dejaron de estar operativas en los años 2000.",
    "El Club de Pesca Carlos Paz ha contribuido significativamente al desarrollo deportivo, social y cultural de Villa Carlos Paz, dejando una huella profunda en su historia.",
  ];

  return (
    <section className="nuestra-historia">
      <h2>Nuestra Historia</h2>
      {historia.map((parrafo, index) => (
        <p key={index}>{parrafo}</p>
      ))}
    </section>
  );
};

export default NuestraHistoria;

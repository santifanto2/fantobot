import React, { useState } from "react";
import new1 from '../assets/noticia1.png'
import new2 from '../assets/noticia2.png'
import new3 from '../assets/noticia3.png'

const Slider = () => {
  const items = [
    {
      title: "Desempate, victoria y cierre de la fase integral para la primera 🏐🔥",
      content: "🔚Las chicas le ganaron 3-0 a Agraria en el 🏟️Zisman- Germanetto y quedaron séptimas en la tabla general 🔜 𝐏𝐫𝐨́𝐱𝐢𝐦𝐨 𝐩𝐚𝐫𝐭𝐢𝐝𝐨: vs SUE por los Playoffs",
      img: new1,
    },
    {
      title: "𝑮𝒓𝒂𝒏 𝒓𝒆𝒄𝒐𝒏𝒐𝒄𝒊𝒎𝒊𝒆𝒏𝒕𝒐 𝒑𝒂𝒓𝒂 𝒍𝒂 𝒉𝒊𝒔𝒕𝒐𝒓𝒊𝒂 𝒚 𝒆𝒍 𝒑𝒓𝒆𝒔𝒆𝒏𝒕𝒆 𝒅𝒆 𝒏𝒖𝒆𝒔𝒕𝒓𝒐 𝒄𝒍𝒖𝒃⛹️‍♂️❤️",
      content: "Durante el conservatorio de basquet fueron reconocidos ex dirigentes, entrenadores y jugadores de nuestro querido club",
      img: new2,
    },
    {
      title: "Jornada de festejos y recreación 🎉🥳⛹️‍♂️",
      content: "Este lunes el mini básquet de nuestro club participó de la celebración de los 100 años de la querida @basquetfbpc 🏟️Esta jornada tuvo lugar en el Mario Alberto Kempes y participaron equipos de toda la provincia ¡Gracias por la invitación, un placer forma parte! 🙌",
      img: new3,
    },
      {
      title: "Jornada de festejos y recreación 🎉🥳⛹️‍♂️",
      content: "Este lunes el mini básquet de nuestro club participó de la celebración de los 100 años de la querida @basquetfbpc 🏟️Esta jornada tuvo lugar en el Mario Alberto Kempes y participaron equipos de toda la provincia ¡Gracias por la invitación, un placer forma parte! 🙌",
      img: new3,
    },

  ];

  const [active, setActive] = useState(0);

  const handleNext = () => {
    if (active < items.length - 1) setActive(active + 1);
  };

  const handlePrev = () => {
    if (active > 0) setActive(active - 1);
  };

  return (
    <div className="slider">
      {items.map((item, index) => (
        <div className={`item ${index === active ? "active" : "hidden"}`} key={index}>
          <div className="item-text">
            <h1>{item.title}</h1>
            <p>{item.content}</p>
          </div>
          <div className="item-img">
            <img src={item.img} alt="" />
          </div>
        </div>
      ))}
      <button id="next" onClick={handleNext}>
        &gt;
      </button>
      <button id="prev" onClick={handlePrev}>
        &lt;
      </button>
    </div>
  );
};

export default Slider;

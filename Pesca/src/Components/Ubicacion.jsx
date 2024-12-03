import React from 'react';


const Ubicacion = () => {
  const textos = [
    "Nos ubicamos en:",
    "Av. San Martin 280, esperamos tu visita cuando quieras para hacer tu consulta u cualquier otra cosa!!",
  ];

  return (
    <div className='container-ubi'>
      <h2 className='title-ubi'>{textos[0]}</h2>
      <p className='text-ubi'>{textos[1]}</p>
    </div>
  );
};

export default Ubicacion;

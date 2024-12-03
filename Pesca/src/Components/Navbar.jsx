import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#noticias">Noticias</a></li>
        <li className="navbar-item"><a href="#historia">Historia</a></li>
        <li className="navbar-item"><a href="#ubicacion">Ubicación</a></li>
        <li className="navbar-item"><a href="#seguinos">¡Seguinos!</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

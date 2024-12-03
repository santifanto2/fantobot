import React from 'react';

const Footer = () => {
  const textos = [
    "Club Pesca Carlos Paz",
    "Tel: 3541 201150",
    "#SomosPesca",
  ];

  return (
    <footer className="footer-container">
      {textos.map((texto, index) => (
        <p key={index} className="footer-text">
          {texto}
        </p>
      ))}
    </footer>
  );
};

export default Footer;

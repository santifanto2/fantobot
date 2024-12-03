import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import NuestraHistoria from './Components/NuestraHistoria';
import Ubicacion from './Components/Ubicacion';
import Footer from './Components/Footer';

const App = () => {

  return (
    <>
      <div>
        <Navbar/>
        <section id="home">
          <Home />
        </section>
        <section id="noticias">
          <Slider />
        </section>
        <section id="historia">
          <NuestraHistoria />
        </section>
        <section id="ubicacion">
          <Ubicacion />
        </section>
        <section id="seguinos">
          <Footer />
        </section>
      </div>
    </>
  )
}

export default App;

import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home1 from "../src/Pages/Home/Home"
import NaMidia from './Pages/NaMidia/NaMidia';
import Social from './Pages/Social/Social';
import Catalogo from './Pages/Catalogo/Catalogo';
import NossosNegocios from './Pages/NossosNegocios/NossosNegocios';
import Sobre from './Pages/Sobre/Sobre';
import Aya from './Pages/Empreendimentos/Aya/Aya';

const App = () => {

  const location = useLocation();

  useEffect(() => {
    const titles = {

    };

    document.title = titles[location.pathname] || 'Meu Site';
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/naMidia" element={<NaMidia />} />
      <Route path="/blueSocial" element={<Social />} />
      <Route path="/catalogo" element={<Catalogo />} />
      <Route path="/nossosNegocios" element={<NossosNegocios />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/Aya" element={<Aya />} />
    </Routes>
  );
};

export default App;
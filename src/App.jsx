import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home1 from "../src/Pages/Home/Home"
import NaMidia from './Pages/NaMidia/NaMidia';
import Social from './Pages/Social/Social';

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
    </Routes>
  );
};

export default App;
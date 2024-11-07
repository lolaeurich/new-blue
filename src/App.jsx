import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home1 from "../src/Pages/Home/Home"
import NaMidia from './Pages/NaMidia/NaMidia';

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
    </Routes>
  );
};

export default App;
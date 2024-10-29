import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home1 from "../src/Pages/Home/Home"

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
    </Routes>
  );
};

export default App;
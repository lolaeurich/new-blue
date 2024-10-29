import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home/home';

const App = () => {

  const location = useLocation();

  useEffect(() => {
    const titles = {

    };

    document.title = titles[location.pathname] || 'Meu Site';
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
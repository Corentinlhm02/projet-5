import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Annonce from './pages/Annonce';
import Erreur from './pages/Erreur';

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="annonce/:id" element={<Annonce />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      
    </>
  );
};

export default App;
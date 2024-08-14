import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Annonce from './components/Annonce';
import Erreur from './pages/Erreur';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="annonce/:id" element={<Annonce />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
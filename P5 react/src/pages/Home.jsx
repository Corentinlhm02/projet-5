import React from 'react';
import ImagePlage from '../assets/img/plage.png';
import Thumb from '../components/Thumb';
import Annonces from '../data/annonces.json';

const Home = () => {
  return (
    <div className="home">
      <section className="banner">
        <img src={ImagePlage} alt="logo kasa" />
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <div className="card">
        <Thumb annonces={Annonces} />
      </div>
    </div>
  );
};

export default Home;




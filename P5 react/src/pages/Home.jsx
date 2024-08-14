import React from 'react';
import Thumb from '../components/Thumb';
import Annonces from '../data/annonces.json';
import Banner from '../components/Banner';
import ImagePlage from '../assets/img/plage.png';

const Home = () => {
  return (
    <div className="home">
      <Banner
        image={ImagePlage}
        title="Chez vous, partout et ailleurs" 
      />
      <div className="card">
        <Thumb annonces={Annonces} />
      </div>
    </div>
  );
};

export default Home;




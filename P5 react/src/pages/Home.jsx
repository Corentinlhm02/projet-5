import React from 'react';
import Thumb from '../components/Thumb';
import Annonces from '../data/annonces.json';
import Banner from '../components/Banner';
import ImagePlage from '../assets/img/plage.png';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="homePage">
      <Header />
      <div className="home">

        <Banner
          image={ImagePlage}
          title="Chez vous, partout et ailleurs" 
        />
        <div className="card">
          <Thumb annonces={Annonces} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;




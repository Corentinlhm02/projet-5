import React from 'react';
import ImageMontagne from '../assets/img/montagne.png';
import Banner from '../components/Banner';
import ButtonAbout from '../components/ButtonAbout';

function About() {
  return (
    <div className='about'>
      <Banner
        image={ImageMontagne}
        title="" 
      />
      <ButtonAbout/>
    </div>
  );
}

export default About;



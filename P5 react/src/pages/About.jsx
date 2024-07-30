import React, { useState } from 'react';
import ImageMontagne from '../assets/img/montagne.png';

function About() {
  const [showFiability, setShowFiability] = useState(false);
  const [showRespect, setShowRespect] = useState(false);
  const [showService, setShowService] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);

  const toggleFiability = () => setShowFiability(!showFiability);
  const toggleRespect = () => setShowRespect(!showRespect);
  const toggleService = () => setShowService(!showService);
  const toggleSecurity = () => setShowSecurity(!showSecurity);

  return (
    <div className='about'>
      <section className="banner">
        <img src={ImageMontagne} alt="logo kasa" />
        <h1>Chez vous, partout et ailleurs</h1>
      </section>
      <section className="about-section">
        <button onClick={toggleFiability}>
          Fiabilité
          <i className={`fa-solid fa-chevron-up ${showFiability ? 'open' : ''}`}></i>
        </button>
        {showFiability && <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>}

        <button onClick={toggleRespect}>
          Respect
          <i className={`fa-solid fa-chevron-up ${showRespect ? 'open' : ''}`}></i>
        </button>
        {showRespect && <p>La bienveillance fait parties des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}

        <button onClick={toggleService}>
          Service
          <i className={`fa-solid fa-chevron-up ${showService ? 'open' : ''}`}></i>
        </button>
        {showService && <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>}

        <button onClick={toggleSecurity}>
          Sécurité
          <i className={`fa-solid fa-chevron-up ${showSecurity ? 'open' : ''}`}></i>
        </button>
        {showSecurity && <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>}
      </section>
    </div>
  );
}

export default About;


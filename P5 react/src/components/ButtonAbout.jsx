import React, { useState } from 'react';

const ButtonAbout = () => {
    const [openPanelIndex, setOpenPanelIndex] = useState(null);

    const togglePanel = (index) => {
      setOpenPanelIndex(openPanelIndex === index ? null : index);
    };
  
    const panels = [
      { title: 'Fiabilité', content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.' },
      { title: 'Respect', content: 'La bienveillance fait parties des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
      { title: 'Service', content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.' },
      { title: 'Sécurité', content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.' }
    ];
    return (
        <div>
        <section className="about-section">
            {panels.map((panel, index) => (
            <div key={index} className="accordion-container">
                <button className="accordion" onClick={() => togglePanel(index)}>
                {panel.title}
                <i className={`fa-solid fa-chevron-up ${openPanelIndex === index ? 'open' : ''}`}></i>
                </button>
                <div className={`panel ${openPanelIndex === index ? 'open' : ''}`}>
                <p>{panel.content}</p>
                </div>
            </div>
            ))}
        </section>          
        </div>
    );
};

export default ButtonAbout;
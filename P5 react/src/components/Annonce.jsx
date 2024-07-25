import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import annonces from "../data/annonces.json";
import Carousel from './CarrouselAnnonce';

const FindAnnoncesID = (id) => {
    return annonces.find((annonce) => annonce.id === id);
};

const Annonce = () => {
    const { id } = useParams();
    const annonce = FindAnnoncesID(id);
    const pictures = annonce.pictures;
    const hostPicture = annonce.host.picture;

    const [isDescriptionOpen, setDescriptionOpen] = useState(false);
    const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);

    const toggleDescription = () => {
        setDescriptionOpen(!isDescriptionOpen);
    };

    const toggleEquipments = () => {
        setEquipmentsOpen(!isEquipmentsOpen);
    };

    return (
        <div className="info"> 
            <Carousel pictures={pictures} />
            <div className="host">
            <div className="title">
                <h3>{annonce.title}</h3>
                <p>{annonce.location}</p>
            </div>
                <div className="hostPhoto">
                    <p>{annonce.host.name}</p>
                    <img src={hostPicture} alt="" />
                </div> 
            </div>
            <div className="tags">
                    {annonce.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                    ))}
                </div>
            <div className="button">
                <div className="buttonDescription">
                    <button className="accordion" onClick={toggleDescription}>
                        Description
                    </button>
                    <div className={`panel ${isDescriptionOpen ? 'open' : ''}`}>
                        <p>{annonce.description}</p>
                    </div>
                </div>
                <div className="buttonEquipements">
                    <button className="accordion" onClick={toggleEquipments}>
                        Equipments
                    </button>
                
                    <div className={`panel ${isEquipmentsOpen ? 'open' : ''}`}>
                        <ul>
                            {annonce.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Annonce;


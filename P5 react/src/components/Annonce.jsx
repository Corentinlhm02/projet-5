import React, { useState } from 'react';
import { useParams, Navigate } from "react-router-dom";
import annonces from "../data/annonces.json";
import Carousel from './CarrouselAnnonce';

const FindAnnoncesID = (id) => {
    return annonces.find((annonce) => annonce.id === id);
};

const Annonce = () => {
    const { id } = useParams();
    const annonce = FindAnnoncesID(id);
    console.log(annonce);
    let pictures = [];
    let hostPicture = "";
    let rating = 0; // Par défaut, la note est de 0
    if (annonce) {     
        pictures = annonce.pictures;
        hostPicture = annonce.host.picture;
        rating = annonce.rating; // Récupère la note de l'annonce
    }  

    const [isDescriptionOpen, setDescriptionOpen] = useState(false);
    const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);

    const toggleDescription = () => {
        setDescriptionOpen(!isDescriptionOpen);
    };

    const toggleEquipments = () => {
        setEquipmentsOpen(!isEquipmentsOpen);
    };

    // Fonction pour générer les étoiles
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                    key={i}
                    className={`fa-solid fa-star ${i <= rating ? 'star-colored' : 'star-grey'}`}
                ></i>
            );
        }
        return stars;
    };

    return (
        <div className="pageannonce">
        {annonce ?(        
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
            <div className="tagAndStars">
                <div className="tags">
                        {annonce.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                </div>
                <div className="stars">
                    {renderStars(rating)}
                </div>
            </div>
            <div className="button">
                <div className="buttonDescription">
                    <button className="accordion" onClick={toggleDescription}>
                        Description
                        <i className={`fa-solid fa-chevron-up ${isDescriptionOpen ? 'open' : ''}`}></i>
                    </button>
                    <div className={`panel ${isDescriptionOpen ? 'open' : ''}`}>
                        <p>{annonce.description}</p>
                    </div>
                </div>
                <div className="buttonEquipements">
                    <button className="accordion" onClick={toggleEquipments}>
                        Equipments
                        <i className={`fa-solid fa-chevron-up ${isEquipmentsOpen ? 'open' : ''}`}></i>
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
        </div>):(
            <Navigate to ="*"/>
        )}
        </div>
    );
};

export default Annonce;



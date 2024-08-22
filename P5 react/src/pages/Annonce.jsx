import React, { useState } from 'react';
import { useParams, Navigate } from "react-router-dom";
import annonces from "../data/annonces.json";
import Carousel from '../components/CarrouselAnnonce';
import Accordion from '../components/Accordion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FindAnnoncesID = (id) => {
    return annonces.find((annonce) => annonce.id === id);
};

const Annonce = () => {
    const { id } = useParams();
    const annonce = FindAnnoncesID(id);
    let pictures = [];
    let hostPicture = "";
    let rating = 0; 
    if (annonce) {     
        pictures = annonce.pictures;
        hostPicture = annonce.host.picture;
        rating = annonce.rating;
    }  

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
        <div className="annoncesPage">
             <Header />
            <div className="pageannonce">
            {annonce ?(        
                <div className="info"> 
                <Carousel pictures={pictures} />
                    <div className="host">
                        <div className="title">
                            <h3>{annonce.title}</h3>
                            <p>{annonce.location}</p>
                            <div className="tags">
                                {annonce.tags.map((tag, index) => (
                                    <span key={index} className="tag">{tag}</span>
                                ))}
                        </div>
                    </div>                        
                    <div className="HostAndStars">
                        <div className="hostPhoto">
                            <p>        
                            {annonce.host.name.split(' ')[0]}<br />
                            {annonce.host.name.split(' ')[1]}
                            </p>
                            <img src={hostPicture} alt="" />
                        </div>
                        <div className="stars">
                        {renderStars(rating)}
                        </div>
                    </div>
                </div>             
                <div className="button">
                    <Accordion title="Description" content={annonce.description} />
                    <Accordion title="Equipements" content={annonce.equipments} isList={true} />
                </div>
            </div>):(
                <Navigate to ="*"/>
            )}
            </div>
            <Footer />
        </div>
    );
};

export default Annonce;



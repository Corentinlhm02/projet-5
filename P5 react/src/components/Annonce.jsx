import React from 'react';
import {useParams} from "react-router-dom"
import annonces from "../data/annonces.json"

const FindAnnoncesID =(id)=>{
    return annonces.find((annonce)=>annonce.id ===id);
}

const Annonce = () => {
    const{id} =useParams();
    const annonce = FindAnnoncesID(id);
    const pictures = annonce.pictures;
    return (
        <div className="info">
                {pictures.map((picture,index)=>{
                    return (
                        <img src={picture} alt={`Picture ${index + 1}`} key={index} />

                    )
                   
                })
                }
            <h3>{annonce.title}</h3>
            <p>{annonce.description}</p>
        </div>
    );
};

export default Annonce;

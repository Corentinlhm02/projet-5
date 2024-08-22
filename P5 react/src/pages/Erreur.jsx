import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Erreur = () => {
    return (
        <div className="erreurPage">
          <Header />
            <div className='erreur'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/">Retourner sur la page d’accueil</Link>
            </div>
        <Footer />
        </div>
    );
};

export default Erreur;

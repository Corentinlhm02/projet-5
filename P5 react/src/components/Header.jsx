import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoKasa from '../assets/img/LOGO.jpg';

function Header() {
  return (
    <header>
    <img src={LogoKasa} alt="logo kasa" />
    <nav>
        <ul>
        <NavLink to="/" className={({isActive}) => (isActive ? "underline" : "")}><li>Accueil</li></NavLink>
        <NavLink to="/about" className={({isActive}) => (isActive ? "underline" : "")}><li>A Propos</li></NavLink>
        </ul>
    </nav>
    </header>
   
  );
}

export default Header;

import React from 'react';
import { createRoot } from 'react-dom/client'; // Importez createRoot de react-dom/client
import { BrowserRouter } from 'react-router-dom'; // Importez BrowserRouter
import App from './App';
import './sass/main.scss';

const container = document.getElementById('root'); // Récupérez l'élément conteneur
const root = createRoot(container); // Créez un root

root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Entourez votre application avec BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);





import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Thumb = ({ annonces }) => {
  return (
    <div className='grid'>
      {annonces.map(annonce => (
        <Link to={`annonce/${annonce.id}`} className='thumb' key={annonce.id}>
          <img src={annonce.cover} alt={annonce.title} />
          <h2>{annonce.title}</h2>
        </Link>
      ))}
    </div>
  );
};

Thumb.propTypes = {
  annonces: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Thumb;



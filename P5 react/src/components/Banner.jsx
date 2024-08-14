import React from 'react';
// import ImagePlage from '../assets/img/plage.png';

const Banner = ({ image, title }) => {
    return (
        <div>
            <section className="banner" style={{ backgroundImage: `url(${image})` }}>
            <h1>{title}</h1>
                {/* <img src={ImagePlage} alt="logo kasa" />
                <h1>Chez vous, partout et ailleurs</h1> */}
            </section>
        </div>
    );
};

export default Banner;
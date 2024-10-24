import React from 'react';

const Banner = ({ image, title }) => {
    return (
        <div>
            <section className="banner" style={{ backgroundImage: `url(${image})` }}>
            <h1>{title}</h1>
            </section>
        </div>
    );
};

export default Banner;
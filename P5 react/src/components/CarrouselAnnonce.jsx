import React, { useState } from 'react';

const Carousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    return (
        <div className="carousel">
            <h1 className="currentIndex">
                {currentIndex + 1} /{pictures.length}
            </h1>
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {pictures.map((picture, index) => (
                    <img src={picture} alt={`Picture ${index + 1}`} key={index} />
                ))}
            </div>

            <div className="carousel-buttons">
                <button onClick={handlePrev}>❮</button>
                <button onClick={handleNext}>❯</button>
            </div>
        </div>
    );
};

export default Carousel;
import React, { useState } from 'react';

const Carousel = ({ pictures }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    };

    if (pictures.length === 1) {
        return (
            <div className="carousel">
                <div className="carousel-inner">
                    <img src={pictures[0]} alt="Single Picture" />
                </div>
            </div>
        );
    }

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {pictures.map((picture, index) => (
                    <img src={picture} alt={`Picture ${index + 1}`} key={index} />
                ))}
            </div>
            <h1 className="currentIndex">
                {currentIndex + 1} / {pictures.length}
            </h1>

            <div className="carousel-buttons">
                <button onClick={handlePrev}>❮</button>
                <button onClick={handleNext}>❯</button>
            </div>
        </div>
    );
};

export default Carousel;

import React, { useState } from 'react';

const Accordion = ({ title, content, isList = false }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="accordion-container">
            <button className="accordion" onClick={toggleAccordion}>
                {title}
                <i className={`fa-solid fa-chevron-up ${isOpen ? 'open' : ''}`}></i>
            </button>
            <div className={`panel ${isOpen ? 'open' : ''}`}>
                {isList ? (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
};

export default Accordion;

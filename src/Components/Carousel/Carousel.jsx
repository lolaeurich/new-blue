import React, { useState, useRef } from 'react';
import './style.css';
import filter from "../../assets/Carousel/filter.png";

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const startX = useRef(0);
    const isDragging = useRef(false);

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
        isDragging.current = true;
    };

    const handleTouchMove = (e) => {
        if (!isDragging.current) return;
        const currentX = e.touches[0].clientX;
        const diffX = startX.current - currentX;

        if (diffX > 50) {
            // Swipe left
            handleNext();
            isDragging.current = false;
        } else if (diffX < -50) {
            // Swipe right
            handlePrev();
            isDragging.current = false;
        }
    };

    const handleTouchEnd = () => {
        isDragging.current = false;
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div
            className="carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <h2 className='carousel-titulo'>Projetos <img alt='' src={filter}/></h2>
            <div className="carousel-container">
                <div
                    className="carousel-images"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div className="carousel-item" key={index}>
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="progress-bar">
                <div
                    className="progress"
                    style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                />
            </div>
        </div>
    );
};

export default Carousel;

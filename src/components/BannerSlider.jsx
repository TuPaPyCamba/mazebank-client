import React, { useState, useEffect } from 'react';
import '../styles/Style.css'

const images = [
    'https://lookw.net/21/2155/1639255398-1001-www.lookw.net.jpg',
    'https://img.gta5-mods.com/q95/images/immersive-loading-screens-ii-iikraze/1ada7a-loadingnewsscreenbg9.jpg',
    'https://images3.alphacoders.com/841/841112.jpg'
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    // Cambiar automáticamente de imagen cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 5000); // Cambia la imagen cada 3 segundos

        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="slider-container">
            <div className="slider-content">
                <img src={images[currentIndex]} alt="banner" className="slider-image" />
            </div>
        </div>
    );
};

export default Slider
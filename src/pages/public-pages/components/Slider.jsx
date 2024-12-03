import { useState, useEffect, useCallback } from 'react';

import RightArrow from "../../../assets/icons/nav-arrow-right.svg";
import LeftArrow from "../../../assets/icons/nav-arrow-left.svg";

// Slider esta hecho para abarcar todo el espacio que su contenedor le permita por eso es importante usarlo dentro de un contenedor

const Slider = ({ children, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = Array.isArray(children) ? children.length : 1;

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
    }, [totalSlides]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    }, [totalSlides]);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, interval);
        return () => clearInterval(timer);
    }, [nextSlide, interval]);

    return (
        <div className="slider">
            <div className="slider-track"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {children}
            </div>
            {/* // Controles de navegación */}
            <button
                onClick={prevSlide}
                className='left-2'
            >
                <img src={LeftArrow} alt="navLeft" />
            </button>
            <button
                onClick={nextSlide}
                className="right-2"
            >
                <img src={RightArrow} alt="navRight" />
            </button>
        </div>
    );
};

export default Slider;

// const Slider = ({ items, interval }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const nextSlide = useCallback(() => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === items.length - 1 ? 0 : prevIndex + 1
//         );
//     }, [items.length]);

//     const prevSlide = useCallback(() => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? items.length - 1 : prevIndex - 1
//         );
//     }, [items.length]);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             nextSlide();
//         }, interval);
//         return () => clearInterval(timer);
//     }, [nextSlide, interval]);

//     return (
//         <div className="relative w-[100vw] h-[100vh] md:h-[85vh] overflow-hidden shadow-2xl">
//             <div
//                 className="flex transition-transform duration-700"
//                 style={{
//                     transform: `translateX(-${currentIndex * 100}%)`,
//                 }}
//             >
//                 {items.map((item, index) => (
//                     <div
//                     key={index}
//                     className="w-full h-[100vh] md:h-[85vh] flex-shrink-0 relative bg-cover bg-center md:bg-[position:top]"
//                     style={{ backgroundImage: `url(${item.image})` }}
//                     >
//                         {/* Información sobre la imagen */}
//                         <div className="bg-black h-full bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">

//                             <h2 className="text-2xl font-bold">{item.title}</h2>
//                             <p className="text-lg mt-2">{item.description}</p>
//                             <a
//                                 href={item.link}
//                                 className="text-blue-300 mt-4 underline"
//                             >
//                                 Leer más
//                             </a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {/* // Controles de navegación */}
//             <button onClick={prevSlide} className="absolute top-1/2 left-2 p-2 transform -translate-y-1/2 hover:scale-125" >
//                 <img src={LeftArrow} alt='' className='size-8 md:size-12 invert' />
//             </button>
//             <button onClick={nextSlide} className="absolute top-1/2 right-2 p-2 transform -translate-y-1/2 hover:scale-125" >
//                 <img src={RightArrow} alt='' className='size-8 md:size-12 invert' />
//             </button>
//         </div>
//     );
// };

// export default Slider;
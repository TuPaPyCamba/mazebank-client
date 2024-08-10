import React from "react";
import Slider from "react-slick";

// Importa los estilos de slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Si tienes un archivo CSS personalizado
import "./BannerSlider.css";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    const banners = [
        { id: 1, imageUrl: "https://via.placeholder.com/1200x400?text=Banner+1" },
        { id: 2, imageUrl: "https://via.placeholder.com/1200x400?text=Banner+2" },
        { id: 3, imageUrl: "https://via.placeholder.com/1200x400?text=Banner+3" },
    ];

    return (
        <div className="banner-slider">
            <Slider {...settings}>
                {banners.map((banner) => (
                    <div key={banner.id}>
                        <img src={banner.imageUrl} alt={`Banner ${banner.id}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;
import React, { useState } from "react";
import './styles.css';
import Slider from "react-slick";

const imagenes = [
    // CarrouselImg,
    // CarrouselImg,
    // CarrouselImg
]


const Carrusel = () => {

    const settings = {
      dots: true, // Habilita puntos de navegación
      infinite: true, // Deslizamiento infinito
      slidesToShow: 3, // Número de elementos visibles
      slidesToScroll: 1, // Número de elementos a desplazar
      autoplay: true, // Autoplay (opcional)
      autoplaySpeed: 2000, // Velocidad de autoplay (opcional)
    };
  
    return (
      <Slider {...settings}>
        {imagenes.map((imagen, index) => (
          <div key={index} className="carousel-item">
            <img src={imagen.src} alt={imagen.alt} />
          </div>
        ))}
      </Slider>
    );
  }
  
export default Carrusel;
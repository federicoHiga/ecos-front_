import React from "react";
import './styles.css';
import Slider from "react-slick";

const imagenes = [
  // CarrouselImg,
  // CarrouselImg,
  // CarrouselImg
]

export default function Carrousel(/*props*/) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="carrousel-container">
      <Slider {...settings}>
        <div className="carrousel-img">
          <img src="src/assets/images/Rectangle 28.png">{/*props.img*/}</img>
        </div>
        <div className="carrousel-img">
          <img src="src/assets/images/Rectangle 29.png">{/*props.img*/}</img>
        </div>
        <div className="carrousel-img">
          <img src="src/assets/images/Rectangle 30.png">{/*props.img*/}</img>
        </div>
      </Slider>
    </section>
  );
}

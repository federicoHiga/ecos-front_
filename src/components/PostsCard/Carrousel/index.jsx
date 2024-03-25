import React from "react";
import "./styles.css";
import Slider from "react-slick";

export default function Carrousel(props) {
  const { img1, img2, img3 } = props;

  const hasMultipleImages = img1 && (img2 || img3);

  var settings = {
    dots: true,
    infinite: hasMultipleImages,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="carrousel-container">
      {hasMultipleImages ? (
        <Slider {...settings}>
          <div className="carrousel-img">
            <img src={img1} alt="Image 1" />
          </div>
          {img2 && (
            <div className="carrousel-img">
              <img src={img2} alt="Image 2" />
            </div>
          )}
          {img3 && (
            <div className="carrousel-img">
              <img src={img3} alt="Image 3" />
            </div>
          )}
        </Slider>
      ) : (
        <div className="carrousel-img">
          <img src={img1} alt="Single Image" />
        </div>
      )}
    </section>
  );
}


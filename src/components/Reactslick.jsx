import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from '../products';

const Reactslick = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  if (!SliderData || SliderData.length === 0) {
    return <p>No slides available</p>;
  }

  
  return (
    <Slider {...settings}>
      {SliderData.map((ele) => (
        <div className="container" key={ele.id}>
          <div className="row mt-5 ms-3 align-items-center">
            {/* Left Column */}
            <div className="col-md-6">
              <h2>{ele.title}</h2>
              <p>{ele.desc}</p>
              <button className="btn btn-primary">Visit Collections</button>
            </div>

            {/* Right Column - Image */}
            <div className="col-md-6 d-flex justify-content-center">
              <img className="slider-image" src={ele.cover} alt={ele.title} />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Reactslick;

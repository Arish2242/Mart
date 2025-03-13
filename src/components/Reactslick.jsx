import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from '../products';

const Reactslick = () => {
  var settings = {
    infinite: true,
    autoplay:true,
    autoplaySpeed:3000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      {
        SliderData && SliderData.map((ele) =>(
          <div className="container  " key ={ele.id}>
            <div className="row mt-5 ms-3 " >
              <div className="col-8">
                <h2>{ele.title}</h2>
                <p>{ele.desc}</p>
                <button >Visit Collections</button>
              </div>
              <div className="col-4 ml-5  ">
                <img className="h-75 mb-5"  src={ele.cover} alt=""/>
              </div>
            </div>
          </div>
        ))
      }





    </Slider>
  )
}

export default Reactslick
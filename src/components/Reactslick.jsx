import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from '../products';
import styles from "../stylings/Navbar.module.css"


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
              <div className="col-6">
                <h2 style={{fontSize:'45px'}}>{ele.title}</h2>
                <p>{ele.desc}</p>
                <button style={{border:'none',fontSize:'25px'}} >Visit Collections</button>
              </div>
              <div className="col-6 ml-5 " >
                <img className={` mb-5 ${styles.slider}` }  src={ele.cover} alt=""/>
              </div>
            </div>
          </div>
        ))
      }





    </Slider>
  )
}

export default Reactslick
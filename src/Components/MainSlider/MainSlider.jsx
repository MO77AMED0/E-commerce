import React, { useState } from 'react'
import style from './MainSlider.module.css'
import slide1 from '../../assets/images/slider-image-3.jpeg'
import slide2 from '../../assets/images/slider-image-2.jpeg'
import slide3 from '../../assets/images/slider-image-1.jpeg'
import Slider from "react-slick";


export default function MainSlider() {


  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000,
  };
    
  return <>
    
<div className="flex py-4">
  
  <div className="w-9/12">
  <Slider {...settings}>
        <img src={slide1} className='h-[400px] w-full' alt="image" />
        <img src={slide2} className='h-[400px] w-full' alt="image" />
        <img src={slide3} className='h-[400px] w-full' alt="image" />
       </Slider> 

  </div>

  <div className="w-3/12">
    <img src={slide1} className='w-full h-[200px]' alt="image" />
    <img src={slide3} className='w-full h-[200px]' alt="image" />
  </div>
  
  </div> 
  </>
}

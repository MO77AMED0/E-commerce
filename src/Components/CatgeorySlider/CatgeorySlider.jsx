import React, { useEffect, useState } from 'react'
import style from './CatgeorySlider.module.css'
import Slider from "react-slick";
import axios from 'axios';



export default function CatgeorySlider() {

  let settings =''
  function Responsive() {
    settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
       autoplaySpeed:1000,
         autoplay:true,
  
  
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  }
  Responsive()
  
  const [categories, setCategories] = useState([])
  async function getcategories() {
    
  try{
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
    setCategories(data.data)
  }catch(err){
    console.log(err);
    
  }
    
  }
  
  
  
   useEffect(()=>{
      
    getcategories()
  
   },[])
    
  return <>
    
    <Slider {...settings}>
          {categories?.map((catogery, index)=> <div key={index} className="my-6">
            <img src={catogery.image}   className='w-full h-[200px] ' key={index} alt="image" />
            <h2>{catogery.name}</h2>
          </div> )}
       </Slider>
  </>
}

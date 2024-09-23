import React, { useContext, useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { Link, useParams } from 'react-router-dom'
import axios, { all } from 'axios'
import Slider from "react-slick";
import { data } from 'autoprefixer';
import { date } from 'yup';
import Loading from '../Loading/Loading';
import { cartContext } from '../context/CartContext';
import { whislist } from '../context/WishlistContext';

export default function ProductDetails() {

  let{addProductToWishlist}=useContext(whislist);


  const [getDetails, setGetDetails] = useState([])
  const [relatedProducts, setRelatedProducts] = useState([])
let {id , category}=  useParams();
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
let settings2 =''

function Responsive2() {
  settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
Responsive2()

  let {addProductToCart} = useContext(cartContext)
  async function productDetails(id) {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
    setGetDetails(data.data)
    
  }
  async function getRelatedProducts(category) {
     let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
   let allProducts= data.data
   let related =allProducts.filter((product)=>product.category.name==category)
   setRelatedProducts(related)
   
   
  
    
  }


  useEffect(()=> {
    productDetails(id);
    getRelatedProducts(category)
  },[])
    
  return <>
    
    <h1 className="text-3xl">ProductDetails</h1>

  {/* {getDetails?    
    <div className="w-5/6 *:mx-auto flex items-center space-x-2">

    <div className="w-1/4 p-4">
    
      {getDetails.images> 1  ?<Slider {...settings2}>
      
      {getDetails.images?.map((image, index)=>  <img src={image} className='w-full' key={index} alt="image" />)}
   </Slider> : <img src={getDetails.imageCover} className='w-full'  alt="image" />}
    </div>
    <div className="w-3/4 space-y-2">
     
      <div >
        <h1 className=' font-medium text-xl'>{getDetails.title}</h1>
        <p className='font-extralight text-gray-500'>{getDetails.description}</p>
        <h3>{getDetails.category?.name}</h3>
        <div className="flex justify-between my-2 p-3">
              <h3>{getDetails.price} EGP</h3>
              <h3><i className="fas fa-star  text-yellow-300"></i>{getDetails.ratingsAverage}</h3>
         </div>
         <button  onClick={()=>addProductToCart(getDetails.id)} className='btn w-full bg-green-600 text-white rounded py-1 '>Add TO Cart</button>

      </div>
    
    </div>
  </div>:<Loading/> } */}


  {getDetails?
      
    <div className="w-5/6 *:mx-auto flex items-center space-x-2">

<div className="w-1/4 p-4">

  {getDetails.images> 1  ?<Slider {...settings2}>
  
  {getDetails.images?.map((image, index)=>  <img src={image} className='w-full' key={index} alt="image" />)}
</Slider> : <img src={getDetails.imageCover} className='w-full'  alt="image" />}
</div>
<div className="w-3/4 space-y-2">
 
  <div >
    <h1 className=' font-medium text-xl'>{getDetails.title}</h1>
    <p className='font-extralight text-gray-500'>{getDetails.description}</p>
    <h3>{getDetails.category?.name}</h3>
    <div className="flex justify-between my-2 p-3">
          <h3>{getDetails.price} EGP</h3>
          <h3><i className="fas fa-star  text-yellow-300"></i>{getDetails.ratingsAverage}</h3>
     </div>
     <button  onClick={()=>addProductToCart(getDetails.id)} className='btn w-full bg-green-600 text-white rounded py-1 '>Add TO Cart</button>

  </div>

</div>
   
       </div>  : 
              <Loading/>
               
       }
 



  <div className="slider-container">
      <Slider {...settings}>
      {relatedProducts?.map((product, index)=>
  
  <div key={index} className="my-6 product p-4">
       
       <img src={product.imageCover} className='w-full p-4' alt={product.category.name}/>
       <h2 className='text-green-600 text-sm'>{product.category.name}</h2>
       <h2 className='font-medium'>{product.title.split(' ').slice(0,2).join(' ')}</h2>
          <div className="flex justify-between my-2">
               <h3>{product.price} EGP</h3>
                <h3><i className="fas fa-star  text-yellow-300"></i>{product.ratingsAverage}</h3>
          </div>

          <button onClick={()=>addProductToWishlist(getDetails.id)}  > <i className="fa-solid fa-heart text-3xl py-6 text-red-500"></i> </button>
          <button  onClick={()=>addProductToCart(getDetails.id)} className='btn w-full bg-green-600 text-white rounded py-1 '>Add TO Cart</button>
       
       
       </div> 
       )}
      </Slider>
    </div>


  </>
}














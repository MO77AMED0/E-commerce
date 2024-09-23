import React, { useContext, useState } from 'react'
import style from './RecentProducts.module.css'
import { Link } from 'react-router-dom'
import { cartContext } from '../context/CartContext'
import { whislist } from '../context/WishlistContext'

export default function RecentProducts({product}) {


 let {addProductToCart}=useContext(cartContext)
 let {addProductToWishlist,wishlistCheck}=useContext(whislist)
    
  return <>
    
   
   <div className=" lg:w-1/6 w-full  product px-4 py-8"> 
   
   <div className=' sm:p-3'>

   
      <Link to={`/productdetails/${product.id}/${product.category.name}`}>
      <img src={product.imageCover} className='w-full p-4' alt={product.category.name}/>
      <h2 className='text-green-600 text-sm'>{product.category.name}</h2>
      <h2 className='font-medium'>{product.title.split(' ').slice(0,2).join(' ')}</h2>
         <div className="flex justify-between my-2">
              <h3>{product.price} EGP</h3>
              <h3><i className="fas fa-star  text-yellow-300"></i>{product.ratingsAverage}</h3>
         </div>
      </Link>
          


      <button onClick={()=>addProductToWishlist(product.id)} className='btn w-full bg-yellow-600 text-white rounded py-1 my-7 '>Add TO wishlist</button>
      <button onClick={()=>addProductToCart(product.id)} className='btn w-full bg-green-600 text-white rounded py-1 '>Add TO Cart</button>

   </div>
   
   </div>

  
  </>
}


import React, { useContext, useEffect, useState } from 'react'
import style from './Products.module.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { cartContext } from '../context/CartContext';
import { whislist } from '../context/WishlistContext';
import RecentProducts from '../RecentProducts/RecentProducts';

export default function Products(props) {
  const [products, setProducts] = useState([])


  let {addProductToCart} = useContext(cartContext)

  let{addProductToWishlist}=useContext(whislist);
  const [searchVal, setSearchVal] = useState('');

  function Search() {
    let searchInput = document.querySelector('#search');
    setSearchVal(searchInput.value);
  }

  async function getProducts() {
    
  try{
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    setProducts(data.data)
  }catch(err){
    console.log(err);
    
  }
    
  }
  
  
  
   useEffect(()=>{
      
    getProducts()
  
   },[])
  
     
   return (
    <>

<div className='w-8/12 mx-auto'>
      <input onChange={Search} className='w-full px-5 py-2 my-5 rounded-md border border-gray-500  outline-none ' type="text" placeholder="Search" id='search'/>
    </div>
      {products.length ? (
          <div className="products py-10 px-10 flex flex-wrap justify-center gap-y-10">
            {products.map((product, i) => {
              if(product.title?.toLowerCase().includes(searchVal.toLowerCase())) {
                return (<RecentProducts key={i} product={product}/>)
              }
            })}
          </div>)
           : (
          <div className="py-7 flex justify-center">
            <Loading/>
          </div>
        )}
    </>
    )
    
}

   
   
   
  

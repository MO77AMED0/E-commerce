import React, { useEffect, useState } from 'react'
import style from './Home.module.css'
import axios from 'axios'
import RecentProducts from '../RecentProducts/RecentProducts';
import { Link } from 'react-router-dom';
import Loading from  '../../Components/Loading/Loading.jsx'
import CatgeorySlider from '../CatgeorySlider/CatgeorySlider.jsx';
import MainSlider from '../MainSlider/MainSlider.jsx';






export default function Home() {
const [products, setProducts] = useState([])

const [searchVal, setSearchVal] = useState('');

function Search() {
  let searchInput = document.querySelector('#search');
  setSearchVal(searchInput.value);
}



async function getProducts() {
  
try{
  let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  // console.log(data.data);
  setProducts(data.data)
}catch(err){
  console.log(err);
  
}
  
}



 useEffect(()=>{
    
  getProducts()

 },[])

  return <>
  <MainSlider/>
    
    <CatgeorySlider/>
     
    <div className='w-8/12 mx-auto'>
      <input onChange={Search} className='w-full px-5 py-2 my-5 rounded-md border border-gray-500  outline-none ' type="text" placeholder="Search" id='search'/>
    </div>
  
{products.length ? (
  <div className="products p-10 flex flex-wrap justify-center gap-y-10">
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
}


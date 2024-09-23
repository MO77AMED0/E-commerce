import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";


 export let whislist =createContext();
 export default function WishlistContextProvider({children}) {


  const [loading, setLoading] = useState(false)
  const [wishlistCheck, setWishlistCheck] = useState([]);


  const [whishlistFav, setWishlist] = useState('')


async function addProductToWishlist(productId) {
  let headers ={token: localStorage.getItem('userToken')};

try{
  setLoading(true)
  let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
    productId
  },{
    headers
  
  });
  // console.log(data);
  toast.success(data.message);
  setWishlist(data);
  setLoading(false)


  
}catch(err){
  console.log(err);
  
}

}

async function getWishlist() {
  let headers ={token: localStorage.getItem('userToken')};

try{
  setLoading(true)
  let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
  
    headers
  
  });
  console.log(data);
  setWishlist(data);
  setLoading(false)

  
}catch(err){
  console.log(err);
  
}

}

async function deleteProductFromWishlist(productId){

  try{
    setLoading(true)
  
      let headers ={token: localStorage.getItem('userToken')};
  
  
  
       let {data}= await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
         
         headers
  
       });
     
  
      
       console.log(data);
    //  setWishlist(data)
    getWishlist()
     setLoading(false)
  
  }
  
  
  catch(err){
  
    console.log(err);
    setLoading(false)
  
  }
  
    };




  return<whislist.Provider value={{addProductToWishlist,getWishlist, whishlistFav, wishlistCheck,loading, setLoading , setWishlist, deleteProductFromWishlist}}>



    {children}
  </whislist.Provider>


 }















 
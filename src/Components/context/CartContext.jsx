import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export let cartContext= createContext();
export default function CartContextProvider({children}) {

const [loading, setLoading] = useState(false)
const [countLoading, setcountLoading] = useState(false);

  const [cart, setcart] = useState(null)

  async function addProductToCart(productId){

try{
  setLoading(true)
    let headers ={token: localStorage.getItem('userToken')};



     let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{
       productId
     },{
       headers

     });
   

    
    //  console.log(data);
   toast.success(data.message);
   setcart(data);
   setLoading(false)

}


catch(err){

  console.log(err);
  setLoading(false)

}

  };


  async function getCart(){

try{
  setLoading(true)

    let headers ={token: localStorage.getItem('userToken')};



     let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
       
       headers

     });
   

    
    //  console.log(data);
   setcart(data)
   setLoading(false)

}


catch(err){

  console.log(err);
  setLoading(false)

}

  };


  async function upDateCount(productId , count){
if (count >0) {
  try{
    setLoading(true)
  
      let headers ={token: localStorage.getItem('userToken')};
  
  
  
       let {data}= await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
         
        count
      },{
        headers
  
       });
     
  
      
      //  console.log(data);
     setcart(data);
     setLoading(false);
  
  }
  
  
  catch(err){
  
    console.log(err);
    setLoading(false);
  
    
  }
}else{
  deletProductFormCart(productId)
}


  };



  async function deletProductFormCart(productId){

    try{
      setLoading(true)
    
        let headers ={token: localStorage.getItem('userToken')};
    
    
    
         let {data}= await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
           
           headers
    
         });
       
    
        
        //  console.log(data);
       setcart(data)
       setLoading(false)
    
    }
    
    
    catch(err){
    
      console.log(err);
      setLoading(false)
    
    }
    
      };
    useEffect(()=>{
      getCart()
    },[])



    async function checkout(shippingAddress){

      try{
        setLoading(true)
          let headers ={token: localStorage.getItem('userToken')};
      
      
      
        
           let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart.data._id}?url=http://localhost:5173`,{
             shippingAddress
           },{
             headers
      
           });
           console.log(data)
           window.location.href= data.session.url
         setLoading(false)

      }
      
      
      catch(err){
      
        console.log(err);
        setLoading(false)
      
      }
      
        };
      

        async function deleteCart(){

          try{
            setLoading(true)
          
              let headers ={token: localStorage.getItem('userToken')};
          
          
          
               let {data}= await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`,{
                 
                 headers
          
               });
             
          
              
              
             setcart(null)
             setLoading(false)
          
          }
          
          
          catch(err){
          
            console.log(err);
            setLoading(false)
          
          }
          
            };

  return <cartContext.Provider value={{countLoading,addProductToCart ,cart,deleteCart ,setcart, getCart ,upDateCount ,checkout, loading, deletProductFormCart}}>;
    {children};
    </cartContext.Provider>;

}































import React, { useContext, useEffect, useState } from 'react'
import style from './Wishlist.module.css'
import { whislist } from '../context/WishlistContext'
import Loading from '../Loading/Loading';
import { cartContext } from '../context/CartContext';




export default function Wishlist() {
let {addProductToCart}= useContext(cartContext)
  let{getWishlist, loading, whishlistFav,setLoading,setWishlist, deleteProductFromWishlist,wishlistCount}=useContext(whislist);
  useEffect(()=>{
    getWishlist()
  },[])   

  function addAndDelete(id){
    addProductToCart(id);
    deleteProductFromWishlist(id)
  }

  return <>
    
          <h2 className="text-3xl my-4 text-center text-main">Wishlist</h2>


     {loading? <Loading/>: 
     
     whishlistFav !=0 ? 
      
   


    
    
    <div>
   
   {whishlistFav.data.map((product,i)=>        <div key={i} className="container ">
 <div className="flex flex-col items-center mx-auto my-7 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
     <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={product.imageCover} alt='ima' />
     <div className="flex flex-col pl-44 justify-between p-4 mr-24 md:mr-0 leading-normal">
       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
       <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.price}</p>
       <div className='my-4 '>
         <button onClick={()=>addAndDelete(product.id)} className="font-medium text-red-600 dark:text-red-500 hover:underline"><i className="mr-1 fa-solid fa-trash"></i>Remove</button>
        </div>
        <div >
        <button onClick={()=>addAndDelete(product.id)} className='btn w-[200px] lg:w-[600px] bg-green-600 text-center text-white rounded py-1 '>Add TO Cart</button>
        </div>
     </div>
   </div>
</div>
)} 
   
   </div>

  
  
    
   
   
   


      
:
<h1 className='text-center my-5 font-semibold'>Wishlist IS Empty</h1>
     }

  
  </>
}















// {loading ? (
//   <Loading />
// ) : wishlist != 0 ? (
//   <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//     <table className="w-5/6 mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//       <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//         <tr>
//           <th scope="col" className="px-16 py-3">
//             <span className="sr-only">Image</span>
//           </th>
//           <th scope="col" className="px-6 py-3">
//             Product
//           </th>
//           <th scope="col" className="px-6 py-3">
//             Price
//           </th>
//           <th scope="col" className="px-6 py-3 text-center">
//             Action
//           </th>
//         </tr>
//       </thead>
//       <tbody>
//         {wishlist?.map((product) => (
//           <tr
//             key={product.id}
//             className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//           >
//             <td className="p-4">
//               <img
//                 src={product.imageCover}
//                 className="w-16 md:w-32 max-w-full max-h-full"
//                 alt="Apple Watch"
//               />
//             </td>
//             <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
//               {product.title}
//             </td>

//             <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
//               {product.price} EGP
//             </td>
//             <td className="px-6 py-4 ">
//               <button
//                 onClick={() => removeFromWishlist(product.id)}
//                 className="font-medium block mx-auto mb-2 text-red-600 dark:text-red-500 hover:underline"
//               >
//                 <i className="fa fa-trash me-2"></i>
//                 Remove
//               </button>
//               <button
//                 onClick={() => addProductToCart(product.id)}
//                 className="font-medium block mx-auto text-green-600 dark:text-green-500 hover:underline"
//               >
//                 <i className="fa-solid fa-cart-shopping text-green-600 me-2"></i>
//                 Add To Cart
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   </div>
// ) : (
//   <h3 className="text-3xl text-center my-36">Your Wishlist Is Empty</h3>
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [subCategories, setSubCategories] = useState(null);
  const [category, setCategory] = useState(null);
  const [subLoading, setSubLoading] = useState(false);
  async function getCategories() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/categories"
      );

      setCategories(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function getSubCategories(categoryId) {
    try {
      setSubLoading(true);
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`
      );
      setSubCategories(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setSubLoading(false);
    }
  }
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <h2 className="text-3xl my-4 text-center text-main">All Categories</h2>
 
     {categories.length? <div className="flex flex-wrap justify-center mx-auto">
    
         {categories.map((product, index)=> 
         <div  onClick={() => {
                     getSubCategories(product._id);
                     setCategory(product.name);
                   }} className=" lg:w-3/12 w-full   px-4 py-8" key={index}>
           <div className=' sm:p-3'>
         
        
     <div className="w-full categories bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 shadow">
     
         <img className=" rounded-t-lg w-full lg:h-[200px]"  src={product.image} alt='' />
      
       <div className="p-5">
     <hr/>
           <h5 className="mb-2 text-main  text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center p-2 mt-2">{product.name}</h5>
      
           <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 text-main" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
           </svg>
      
       </div>
     </div>
    
    
        </div>
         </div> )}
     
          </div>  : <div className="flex justify-center py-16 ">
                 <Loading/>
                 
          </div>
          }
      
      
        {subCategories && subLoading? 
             <Loading/>  :<>
             
             
             <h2 className="text-3xl py-4 my-8 text-center text-green-600 border-t">
               {category}
             </h2>
     
             
             </>}

     
      {subLoading ? <Loading /> : subCategories ? 
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-6">
          {subCategories.map((category) => (
            <p
              key={category._id}
              className=" flex justify-center items-center shadow p-4 rounded-lg text-lg hover:shadow-2xl hover:scale-[1.01] duration-500"
            >
              {category.name}
            </p>
          ))}
        </div>
       : 
        ""
      } 
    </>
  );
}


















import React, { useContext, useState } from 'react';
import style from './Login.module.css';
import { useFormik, validateYupSchema } from 'formik';
import *  as Yup  from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/Usercontext';

export default function login() {
    const [apiError, setapiError] = useState(null);
    const [loading, setLoading] = useState(false);
    let {setUsereData} =useContext(UserContext);


    let Navigate =useNavigate();

  async function handelLogin(values){
   try{
    setLoading(true)
    let {data}= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`, values);
    localStorage.setItem('userToken', data.token)
    Navigate('/');
    setLoading(false)
    setUsereData(data.token)
   }
    catch (err) {
        setapiError(err.response.data.message);
        setLoading(false)

        
    };  

    
  };

 let validateYupSchema= Yup.object().shape({
  email : Yup.string().email('Email  invalid').required('email is required'),
  password : Yup.string().matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,16}$/ , 'password invalid ex:(Mohamed123)').required('password is required'),

 });

  let formik = useFormik({
    
    initialValues:{
        email:"",
        password:"",
     
    },
    validationSchema:validateYupSchema,
    onSubmit:handelLogin
    



  });



    
  return <>
    
          
  <div className="pt-8 w-1/2 mx-auto">
    <h2 className='text-3xl font-semibold py-6'>login Now</h2>
    <form onSubmit={formik.handleSubmit} >

       { apiError &&  <div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
               {apiError}
          </div>}

       
          <div className="relative z-0 w-full mb-5 group">
              <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" "  />
              <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email</label>
          </div>
          {formik.errors.email && formik.touched.email &&   <div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              {formik.errors.email}
          </div>} 

          <div className="relative z-0 w-full mb-5 group">
              <input type="password" name="password" id="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-emerald-500 focus:outline-none focus:ring-0 focus:border-emerald-600 peer" placeholder=" "  />
              <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password</label>
          </div>

          {formik.errors.password && formik.touched.password &&   <div className="px-4 py-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              {formik.errors.password}
          </div>} 



          
          <div className="forget-pass flex justify-center items-center gap-4">
            <span className='w-28 sm:w-40 h-[0.5px] bg-black'></span>
            <Link to="/forgetpassword"> <p className='cursor-pointer  hover:text-blue-700'>Forgot Password?</p></Link>
            <span className='w-28 sm:w-40 h-[0.5px] bg-black'></span>
          </div>
          
           {loading?<button type='button'  className="text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800"><i className='fas fa-spinner fa-spin-pulse'></i></button>:     
             <button type="submit" className="mr-3 text-white bg-emerald-500 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">Submit</button> }                                                                           

      </form>
      

      </div> 
  </>
}


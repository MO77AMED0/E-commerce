import React, { useState } from 'react'
import style from './Loading.module.css'
import { FidgetSpinner } from 'react-loader-spinner'

export default function Loading() {



    
  return <>
    <div className="flex justify-center py-16 ">
    <FidgetSpinner
  visible={true}
  height="200"
  width="200"
  ariaLabel="fidget-spinner-loading"
  wrapperStyle={{}}
  wrapperClass="fidget-spinner-wrapper"
  /> 
               
       </div>
  
  </>
  
  
}

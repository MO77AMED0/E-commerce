import React, { useContext, useEffect, useState } from 'react'
import style from './Allorders.module.css'
import { cartContext } from '../context/CartContext'

export default function Allorders() {


let {deleteCart}=useContext(cartContext);
useEffect(()=>{
  deleteCart()
},[])
    
  return <>
    
    <h1 className="text-3xl">Allorders</h1>


  
  </>
}

"use client";

import { Navbar } from "flowbite-react";


import React, { useContext, useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/images/freshcart-logo.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/Usercontext'
import { cartContext } from '../context/CartContext'

export default function Navbarr() {
  let { usereData, setUsereData } = useContext(UserContext)
  let { cart } = useContext(cartContext)
  let navigate = useNavigate()
  function logOut() {

    localStorage.removeItem('userToken');
    setUsereData(null);
    navigate('/login')
  }

  return <>

    <Navbar fluid rounded className='bg-gray-200 px-10  z-50 md:fixed top-0 inset-x-0 py-4 text-center capitalize'>
      <Navbar.Brand >
        <img src={logo} className="mr-3 h-6 sm:h-9" alt=" Logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      {usereData ? <Navbar.Collapse className=''>
        <li><NavLink to="">Home</NavLink></li>
        <li><NavLink to="products">products</NavLink></li>
        <li><NavLink to="categories">categories</NavLink></li>
        <li><NavLink to="brands">brands</NavLink></li>
        <li><NavLink to="Wishlist">Wishlist </NavLink></li>
        <li><NavLink to="cart">Cart</NavLink></li>
      </Navbar.Collapse> :''}
      
        
      <Navbar.Collapse className=''>
      <div className=''>
        <div className=''>
          <ul className='flex flex-col lg:flex-row lg:space-x-4'>


            {usereData ? <><li className='relative'><NavLink to="cart"><i className="fa-solid text-2xl text-main fa-cart-shopping"></i></NavLink> <span className='text-white absolute lg:left-[10.5px] Lg:top-[-7px]  top-[-10px] left-1/2'>{cart ? cart.numOfCartItems : 0}</span></li>
              <li className=" my-5 lg:my-0" onClick={() => logOut()}><span className=' cursor-pointer btn-red p-5 '>logout</span></li></> :
              < >
                <li className=" lg:ml-0 lg:my-0 ml-5"><NavLink to="login"><span className="cursor-pointer btn-bule p-5">Login</span></NavLink></li>
                <li className=" my-5 lg:my-0"><NavLink to="register"><span className="cursor-pointer btn-bule p-5">Register</span></NavLink></li>
              </>}

            <li className=' text-black space-x-4'>
              <i className='fab fa-facebook-f'></i>
              <i className='fab fa-linkedin-in'></i>
              <i className='fab fa-youtube'></i>
              <i className='fab fa-twitter'></i>
              <i className='fab fa-instagram'></i>
            </li>

          </ul>
        </div>
      </div>
      </Navbar.Collapse>

    </Navbar>
  </>
}




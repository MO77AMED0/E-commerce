import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Cart from './Components/Cart/Cart.jsx'
import Products from './Components/Products/Products.jsx'
import Categories from './Components/Categories/Categories.jsx'
import Brands from './Components/Brands/Brands.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Notfound from './Components/Notfound/Notfound.jsx'
import UserContextProvider from './Components/context/Usercontext.jsx'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import CartContextProvider from './Components/context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'
import Checkout from './Components/Checkout/Checkout.jsx'
import Allorders from './Components/Allorders/Allorders.jsx'
import { Navbar } from 'flowbite-react'
import Wishlist from './Components/Wishlist/Wishlist.jsx'
import WishlistContextProvider from './Components/context/WishlistContext.jsx'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword.jsx'
import VerifyResetCode from './Components/VerifyResateCode/VerifyResateCode.jsx'
import ResetPassword from './Components/ResatPassword/ResatPassword.jsx'


let routers = createBrowserRouter([
  {path: '' , element: <Layout/>, children :[
    {index : true , element:<ProtectedRoute><Home/></ProtectedRoute>},
    {path:'cart' , element:<ProtectedRoute><Cart/></ProtectedRoute>},
    {path:'categories' , element:<ProtectedRoute><Categories/></ProtectedRoute>},
    {path:'brands' , element:<ProtectedRoute><Brands/></ProtectedRoute>},
    {path:'products' , element:<ProtectedRoute><Products/></ProtectedRoute>},
    {path:'checkout' , element:<ProtectedRoute><Checkout/></ProtectedRoute>},
    {path:'allorders' , element:<ProtectedRoute><Allorders/></ProtectedRoute>},
    {path:'Wishlist' , element:<ProtectedRoute><Wishlist/></ProtectedRoute>},
    {path:'forgetpassword' , element:<ForgetPassword/>},
    {path:'verifyresetcode' , element:<VerifyResetCode/>},
    {path:'resetpassword' , element:<ResetPassword/>},
    {path:'productdetails/:id/:category' , element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
    {path:'register' , element:<Register/>},
    {path:'login' , element:<Login/>},
    {path:'*' , element:<Notfound/>},
  ]}
])


function App() {

  return <WishlistContextProvider>



< CartContextProvider>
  
  <UserContextProvider>
       <RouterProvider router={routers}></RouterProvider> 
       <Toaster/>

  </UserContextProvider>

  </CartContextProvider>
  </WishlistContextProvider>
  
  
}

export default App

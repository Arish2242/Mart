import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import ProductDetails from './ProductDetails'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/productdetails/:id' element={<ProductDetails/>} />

    </Routes>
  )
}

export default Routers
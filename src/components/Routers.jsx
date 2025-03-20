import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Shop from './Shop'
import Cart from './Cart'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/productdetails/:id' element={<Products/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/cart' element={<Cart />} />

    </Routes>
  )
}

export default Routers
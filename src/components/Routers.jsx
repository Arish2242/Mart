import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Products from './Products'
import Shop from './Shop'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/productdetails/:id' element={<Products/>} />
        <Route path='/shop' element={<Shop/>} />

    </Routes>
  )
}

export default Routers
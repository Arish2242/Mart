import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Products from './Products'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/productdetails/:id' element={<Products/>} />

    </Routes>
  )
}

export default Routers
import React from 'react'
import Navbar from './Navbar'
import Reactslick from './Reactslick'
import Cards from './Cards'
import DiscountProducts from './DiscountProducts'
import NewArrivals from './NewArrivals'
import BestSales from './BestSales'
import Footer from './Footer'

const Home = () => {
    return (
        <> 
            <Navbar />
            <div className="container">
                <Reactslick/>
            </div>
            <Cards />
            <DiscountProducts />
            <NewArrivals />
            <BestSales />
            <Footer />
        </>
    )
}

export default Home